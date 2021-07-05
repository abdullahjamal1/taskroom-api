const { Group, validateGroup } = require('../models/group');
const { User } = require('../models/user');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const groupAdmin = require('../middleware/groupAdmin');
const groupMember = require('../middleware/groupMember');
const mail = require('../services/mail');
const mongoose = require('mongoose');
const Fawn = require('fawn');
const express = require('express');
const router = express.Router();

Fawn.init(mongoose);
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
    members.push(admin);

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

    // try {
    // new Fawn.Task()
    await group.save()
             // add this group to each of members docs
    await User.updateMany({ email: { $in: emails } }, { $push: { groups: group._id } })
    // .run();
    return res.send(group);
    // }
    // catch (ex) {

    //     // log this exception in backend
    //     res.status(500).send('Something failed');
    // }
});

// TODO: implement transaction
router.put('/:id', [auth, groupAdmin, validate(validateGroup)], async (req, res) => {

    let { title, description, members: emails, theme } = req.body;
    // diff btw req.group & req.body

    // find info of all valid users from the db
    // TODO: return error for invalid emails
    let admin = await User.findById(req.user._id);
    let members = await User.find({ email: { $in: emails } });
    
    if (!members.includes(admin)) {
        members.push(admin);
    }
    emails = members.map(member => member.email);

    const group = await Group.findByIdAndUpdate(req.params.id, {
        title, description, members, theme
    }, { new: true });

    if (!group) return res.status(404).send('group not found');

    // req.group added in middleware
    let oldEmails = req.group.members.map(m => m.email);

    let addedEmails = emails.filter(m => {
        if (!oldEmails.includes(m))
            return m;
    });

    if (addedEmails.length > 0) {
        await User.updateMany({ email: { $in: addedEmails } }, { $push: { groups: group._id } });
        mail.sendInvites(addedEmails, group, admin);
    }

    let removedEmails = oldEmails.filter(m => { if (!emails.includes(m)) { return m; } });

    if (removedEmails.length > 0) {
        await User.updateMany({ email: { $in: removedEmails } }, { $pull: { groups: group._id } });
        mail.sendGroupRemovalMail(removedEmails, group, admin);
    }

    return res.send(group);
});

// TODO : implement using transaction
router.delete('/:id', [auth, groupAdmin], async (req, res) => {

    const group = await Group.findByIdAndRemove(req.params.id);

    if (!group) return res.status(404).send('group not found');

    // delete group
    // remove group from users collection
    // delete task
    // delete comments
    // delete files

    return res.send('deleted successfully');
});

module.exports = router;
