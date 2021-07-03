const { Comment, validateComment } = require('../models/comment');
const { User } = require('../models/user');
const { Task } = require('../models/task');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const groupMember = require('../middleware/groupMember');
const mail = require('../services/mail');
const express = require('express');
const router = express.Router();

/*
    TODO: add pagination

    @param {groupId, taskId} @required
    @param {parentId} @optional
*/
router.get('/', [auth, groupMember], async (req, res) => {

    const { taskId, groupId, parentId } = req.query;

    if (!groupId) return res.status(400).send('groupId not found in query string');
    if (!taskId) return res.status(400).send('taskId not found in query string');

    const comments = await Comment.find({ taskId, groupId });

    return res.send(comments);
});

/*
    @param { groupId, taskId } @required
    @body {message}
*/
router.post('/', [auth, groupMember, validate(validateComment)], async (req, res) => {

    const { groupId, taskId } = req.query;
    const { message } = req.body;

    if (!groupId) return res.status(400).send('groupId not found in query string');
    if (!taskId) return res.status(400).send('taskId not found in query string');

    const task = Task.findById({ _id: taskId, groupId });
    if (!task) return res.send(400).send('invalid groupId or taskId');

    const author = await User.findById(req.user._id);

    const comment = new Comment({
        message, author, taskId, groupId
    });
    await comment.save();

    return res.send(comment);
});

module.exports = router;
