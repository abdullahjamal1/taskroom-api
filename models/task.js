const Joi = require('joi');
const mongoose = require('mongoose');
const { userSchema } = require('./group');

// a subdocument with updates history {action, date, user}
// user who took the action
const taskTimeline = new mongoose.Schema({
    action: {
        type: String,
        required: true,
        enum: ['created', 'updated', 'To Do', 'Doing', 'Done']
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    user: {
        type: userSchema,
        required: true
    }
})

const Task = mongoose.model('Tasks', new mongoose.Schema({

    groupId: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: userSchema,
        required: true
    },
    creationTime: {
        type: Date,
        required: false,
        default: Date.now()
    },
    dueTime: {
        type: Date,
        required: false
    },
    // if no completionTime => task is not yet completed
    status: {
        type: String,
        enum: ['To Do', 'Doing', 'Done', 'Due'],
        required: false
    },
    tags: {
        type: [String],
        required: false
    },
    commentsCount: {
        type: Number,
        required: false,
        default: 0,
    },
    color: {
        type: String,
        required: false
    },
    timeline: {
        type: [taskTimeline],
        required: true
    }
}));

function validateTask(task) {

    const schema = {
        title: Joi.string().min(5).max(50).required(),
        description: Joi.string().min(2).max(1000).required(),
        dueTime: Joi.date().timestamp(), //.min('now'),
        status: Joi.string(),
        action: Joi.string(),
        tags: Joi.array().items(Joi.string().min(1).max(255)),
    };

    return Joi.validate(task, schema);
}

exports.validateTask = validateTask;
exports.Task = Task;