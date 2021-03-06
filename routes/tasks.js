const { Task, validateTask } = require('../models/task');
const { User } = require('../models/user');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const groupAdmin = require('../middleware/groupAdmin');
const groupMember = require('../middleware/groupMember');
const mail = require('../services/mail');
const express = require('express');
const router = express.Router();

/*
    description: returns all tasks associated with a group
    @param {groupId} @required
*/
router.get('/', [auth, groupMember], async (req, res) => {

    const groupId = req.query.groupId;

    const tasks = await Task.find({ groupId }).select('-description -files');

    return res.send(tasks);
});

/*
@param { groupId } @required
*/
router.get('/:id', [auth, groupMember], async (req, res) => {

    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).send('task not found');
    // from middleware
    return res.send(task);
});

/*
    @param { groupId } @required
    @body {title, description, dueTime, tags, collaborators}
    @Required: title, description
*/
router.post('/', [auth, groupMember, validate(validateTask)], async (req, res) => {

    const groupId = req.query.groupId;
    let { title, description, dueTime, tags, collaborators } = req.body;

    const author = await User.findById(req.user._id);

    const timeline = { action: "created", user: author };

    collaborators = await User.find({ email: { $in: collaborators }, isVerified: true });

    const task = new Task({
        groupId, title, description, dueTime, tags,
        author, status: "To Do", timeline, collaborators
    });
    await task.save();

    mail.sendTaskNotification(req.group, task);

    return res.send(task);
});

/*
    @param { groupId } @required
    @body {title, description, dueTime, tags, collaborators}
*/
router.put('/:id', [auth, groupMember, validate(validateTask)], async (req, res) => {

    let { title, description, dueTime, status, action, tags, collaborators } = req.body;

    const user = await User.findById(req.user._id);

    if (!action)
        action = "updated";
    else status = action;

    let timeline = { action, user, date: Date.now() };

    collaborators = await User.find({ email: { $in: collaborators }, isVerified: true });

    let task = await Task.findByIdAndUpdate(req.params.id, {
        title, description, dueTime, $push: { timeline }, status, tags, collaborators
    }, { new: true });

    if (!task) return res.status(404).send('task not found');

    mail.sendTaskUpdationNotification(req.group, task);

    await task.save();

    return res.send(task);
});

/*
    TODO: implement using transaction
    @param { groupId } @required
*/
router.delete('/:id', [auth, groupMember], async (req, res) => {

    const task = await Task.findByIdAndRemove(req.params.id);

    if (!task) return res.status(404).send('task not found');

    // TODO
    // delete associated comments and files from s3
    return res.send('task deleted successfully');
});

module.exports = router;
