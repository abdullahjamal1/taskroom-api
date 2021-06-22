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

    const tasks = await Task.find({ groupId });

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
    @body {title, description, dueTime, isCompleted}
*/
router.post('/', [auth, groupMember, validate(validateTask)], async (req, res) => {

    const groupId = req.query.groupId;
    const { title, description, dueTime } = req.body;
    const author = await User.findById(req.user._id);

    const task = new Task({
        groupId, title, description, dueTime, author
    });
    await task.save();

    mail.sendTaskNotification(req.group, task);

    return res.send(task);
});

/*
    @param { groupId } @required
    @body {title, description, dueTime, isCompleted}
    TODO: test completionTime
*/
router.put('/:id', [auth, groupMember, validate(validateTask)], async (req, res) => {

    const groupId = req.query.groupId;
    const { title, description, dueTime, isCompleted } = req.body;
    const author = await User.findById(req.user._id);
    let completionTime;

    if (isCompleted) {
        mail.sendTaskCompletionNotification(req.group, task);
        completionTime = Date.now();
    }

    const task = await Task.findByIdAndUpdate(req.params.id, {
        groupId, title, description, dueTime, author, completionTime
    }, { new: true });

    if (!task) return res.status(404).send('task not found');

    await task.save();

    return res.send(task);
});

/*
    @param { groupId } @required
*/
router.delete('/:id', [auth, groupMember], async (req, res) => {

    const task = await Task.findByIdAndRemove(req.params.id);

    if (!task) return res.status(404).send('task not found');

    return res.send('task deleted successfully');
});

module.exports = router;
