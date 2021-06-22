const Joi = require('joi');
const mongoose = require('mongoose');
const { userSchema } = require('./group');

// TODO

// a subdocument with updates history
//  {created, date} {updated, date} {active, date}, {onHold, date}, {completed, date}

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
        required: true
    },
    // if no completionTime => task is not yet completed
    completionTime: {
        type: Date,
        required: false
    },
    commentsCount: {
        type: Number,
        required: false,
        default: 0,
    },
}));

function validateTask(task) {

    const schema = {
        title: Joi.string().min(5).max(50).required(),
        description: Joi.string().min(2).max(1000).required(),
        dueTime: Joi.date().timestamp(), //.min('now'),
        isCompleted: Joi.boolean().required()
    };

    return Joi.validate(task, schema);
}

exports.validateTask = validateTask;
exports.Task = Task;