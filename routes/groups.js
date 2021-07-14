const { Group, validateGroup } = require("../models/group");
const { User } = require("../models/user");
const { Comment } = require("../models/comment");
const { Task } = require("../models/task");
const mail = require("../services/mail");
const validate = require("../middleware/validate");
const auth = require("../middleware/auth");
const groupAdmin = require("../middleware/groupAdmin");
const groupMember = require("../middleware/groupMember");
const { createNewUsers } = require("../services/userService");
const mongoose = require("mongoose");
const Fawn = require("fawn");
const express = require("express");
const router = express.Router();

Fawn.init(mongoose);
/*
    description: returns all groups of which the user is the member
*/
router.get("/", [auth], async (req, res) => {
    const user = await User.findById(req.user._id);
    const groups = await Group.find({ _id: { $in: user.groups } }).select(
        "-description"
    );

    return res.send(groups);
});

/*
    returns a particular group
*/
router.get("/:id", [auth, groupMember], async (req, res) => {
    const group = await Group.findById(req.params.id);

    if (!group) return res.status(404).send("group not found");
    // from middleware
    return res.send(group);
});

/*
    Description: auto-joins all registered users to the group and sends invites to non-registered users
    // TODO: return error for invalid emails to admins email
    @body { title, description, admin, members, theme }
*/
router.post("/", [auth, validate(validateGroup)], async (req, res) => {

    let { title, description, theme, members: emails } = req.body;

    // req.user._id added in middleware from jwt
    const admin = await User.findById(req.user._id);

    // remove group admins email if exists to avoid double users
    if (emails.includes(admin.email))
        emails = emails.filter(email => email !== admin.email);

    // find all registered users
    let members = await User.find({ email: { $in: emails } });
    const verifiedEmails = members.map((m) => m.email);
    members.push(admin);

    // find all non-registered users
    const unVerifiedEmails = emails.filter(
        (email) => !verifiedEmails.includes(email)
    );
    // create accounts of non-registered users and send them invites
    const unVerifiedUsers = await createNewUsers(unVerifiedEmails, title, admin);
    members = [...members, ...unVerifiedUsers];

    const group = new Group({
        title, description, admin, members, theme,
    });

  // send invitation mail to all members
    if (verifiedEmails.length > 0)
        mail.sendJoiningNotification(verifiedEmails, group, admin);

    // admin is also member of the group and should not receive group joining notification
    emails.push(admin.email);
    await group.save();

    await User.updateMany(
        { email: { $in: emails } },
        { $push: { groups: group._id } }
    );

    return res.send(group);
});

/*
    @body { title, description, admin, members, theme }
*/
router.put("/:id", [auth, groupAdmin, validate(validateGroup)], async (req, res) => {

    let { title, description, members: emails, theme } = req.body;

    // find info of all valid users from the db
    // TODO: return error for invalid emails
    let admin = await User.findById(req.user._id);
    let members = await User.find({ email: { $in: emails } });

    let verifiedEmails = members.map((member) => member.email);
    if (!verifiedEmails.includes(admin.email)) {
        members.push(admin);
    }

    // find all non-registered users
    const unVerifiedEmails = emails.filter(
        (email) => !verifiedEmails.includes(email)
    );
    // create their accounts and send them invites
    const unVerifiedUsers = await createNewUsers(unVerifiedEmails, title, admin);
    members = [...members, ...unVerifiedUsers];

    const group = await Group.findByIdAndUpdate(
        req.params.id,
        {
            title,
            description,
            members,
            theme,
        },
        { new: true }
    );

    if (!group) return res.status(404).send("group not found");

    // req.group added in middleware
    let oldEmails = req.group.members.map((m) => m.email);

    // find emails of newly added users
    let newEmails = emails.filter((m) => {
        if (!oldEmails.includes(m)) return m;
    });
    // join newly added users to the group and send joining notification
    if (newEmails.length > 0) {
        await User.updateMany(
            { email: { $in: newEmails } },
            { $push: { groups: group._id } }
        );
        mail.sendJoiningNotification(newEmails, group, admin);
    }

    // find emails of removed users
    let removedEmails = oldEmails.filter((m) => {
        if (!emails.includes(m)) {
            return m;
        }
    });
    // unenroll removed users from group and send them group removal notification
    if (removedEmails.length > 0) {
        await User.updateMany(
            { email: { $in: removedEmails } },
            { $pull: { groups: group._id } }
        );
        mail.sendGroupRemovalMail(removedEmails, group, admin);
    }

    return res.send(group);
}
);

// TODO : implement using transaction
router.delete("/:id", [auth, groupAdmin], async (req, res) => {

    const group = await Group.findByIdAndRemove(req.params.id);

    if (!group) return res.status(404).send("group not found");

    group.members.forEach(async (member) => {
        await User.findByIdAndUpdate(member._id, { $pull: { groups: group._id } })
    });
    await Task.removeMany({ groupId: group._id });
    await Comment.removeMany({ groupId: group._id });
    // TODO: delete associated files from s3

    return res.send("deleted successfully");
});

module.exports = router;
