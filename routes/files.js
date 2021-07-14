const { Task, validateTask } = require('../models/task');
const { User } = require('../models/user');
const { upload, uploadFile, deleteFile } = require('../services/fileService');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const groupAdmin = require('../middleware/groupAdmin');
const groupMember = require('../middleware/groupMember');
const mail = require('../services/mail');
const express = require('express');

const router = express.Router();

/*
     @param { groupId } @required
     @returns  a flattened metadata of all files in a group
*/
router.get('/', [auth, groupMember], async (req, res) => {

    const groupId = req.query.groupId;

    const files = await Task.find({ groupId }).select('files -_id');

    console.log(files.flat());

    return res.send(files.flat());
});

// TODO  add size constraint
/*
    @param { groupId, taskId } @required
    @body {file }
*/
router.post('/', [auth, groupMember, upload.single('file')], async (req, res) => {

    const { taskId } = req.query;
    const { originalname: name, size, location } = req.file;
    const owner = await User.findById(req.user._id);

    const fileMetaData = { name, size, owner, location };

    let task = await Task.findByIdAndUpdate(taskId, {
        $push: { files: fileMetaData }
    }, { new: true });

    if (!task) {
        deleteFile(task.files[task.files.length - 1]._id);
        return res.status(404).send('task with given id not found');
    }
    // TODO, send file upload notification

    return res.send(task.files[task.files.length - 1]);
});


/*
    TODO: implement using transaction
    @param { groupId, taskId } @required
*/
router.delete('/:id', [auth, groupMember], async (req, res) => {

    const _id = req.params.id;
    const { taskId, groupId } = req.query;

    const task = await Task.findByIdAndUpdate(taskId, {
        $pull: { files: { _id } }
    });

    if (!task) return res.status(404).send('task or file not found');

    const fileToBeDeleted = task.files.filter(file => file._id.toHexString() === req.params.id)[0];

    // to separate and retrieve key from object url
    const key = fileToBeDeleted.location.split('com/')[1];
    deleteFile(key, taskId, groupId);

    // TODO: send file deletion notification

    return res.send('task deleted successfully');
});

module.exports = router;