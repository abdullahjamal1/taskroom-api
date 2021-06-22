const { Group, validateGroup } = require('../models/group');
const { User } = require('../models/user');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const groupAdmin = require('../middleware/groupAdmin');
const groupMember = require('../middleware/groupMember');
const mail = require('../services/mail');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

/*
    description: returns all groups of which the user is the member
*/
router.get('/', [auth], async (req, res) => {

    const user = await User.findById(req.user._id);
    const groups = await Group.find({ _id: { $in: user.groups } })
        .select('-members -description');

    return res.send(groups);
});

router.get('/:id', [auth, groupMember], async (req, res) => {

    const group = await Group.findById(req.params.id);

    if (!group) return res.status(404).send('group not found');
    // from middleware
    return res.send(group);
});

// assume all mails are valid
// TODO: only registered users are invited
/*
    @body { title, description, admin, members, theme }
*/
router.post('/', [auth, validate(validateGroup)], async (req, res) => {

    // req.user._id added in middleware from jwt
    const admin = await User.findById(req.user._id);
    let emails = req.body.members;

    // find info of all valid users from the db
    // TODO: return error for invalid emails to admins email
    let members = await User.find({ email: { $in: emails } });

    const group = new Group({
        title: req.body.title,
        description: req.body.description,
        admin,
        members,
        theme: req.body.theme
    });

    // send invitation mail to all members
    mail.sendInvites(emails, group, admin);

    // admin is also member of the group
    emails.push(admin.email);
    await group.save();

    // add this group to each of members docs
    await User.updateMany({ email: { $in: emails } }, { $push: { groups: group._id } });

    return res.send(group);
});

// TODO:
// update members added => sendInviteNotification
// update members removed => sendRemoveNotification
router.put('/:id', [auth, groupAdmin, validate(validateGroup)], async (req, res) => {

    // diff btw req.group & req.body
    let emails = req.body.members;

    // find info of all valid users from the db
    // TODO: return error for invalid emails
    let newMembers = await User.find({ email: { $in: emails } });

    const group = await Group.findByIdAndUpdate(req.params.id, {
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        admin: req.group.admin,
        members: newMembers,
        theme: req.body.theme
    }, { new: true });

    if (!group) return res.status(404).send('group not found');

    let oldEmails = req.group.members.map(m => m.email);

    let addedEmails = emails.map(m => !oldEmails.includes(m));
    if (addedEmails) {
        await User.updateMany({ email: { $in: addedEmails } }, { $push: { groups: group._id } });
        mail.sendInvites(addedEmails, group, admin);
    }

    let removedEmails = oldEmails.map(m => !emails.includes(m.email));
    if (removedEmails) {
        await User.updateMany({ email: { $in: removedEmails } }, { $pull: { groups: group._id } });
        mail.sendGroupRemovalMail(removedEmails, group, admin);
    }

    return res.send(group);
});

// TODO :
router.delete('/:id', [auth, groupAdmin, validate(validateGroup)], async (req, res) => {

    const group = await Group.findByIdAndRemove(req.params.id);

    if (!group) return res.status(404).send('group not found');
    // delete group
    // remove group from users collection
    // delete task
    // delete discussion
    // delete files

    return res.send('deleted successfully');
});

module.exports = router;
