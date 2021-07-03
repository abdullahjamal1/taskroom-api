const Joi = require('joi');
const mongoose = require('mongoose');
const { userSchema } = require('./group');

// TODO: validateObjectIds

const Comment = mongoose.model('Comments', new mongoose.Schema({

    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    message: {
        type: String,
        required: true,
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
    replies: {
        type: Number,
        required: false,
        default: 0
    }
}));

function validateComment(comment) {

    const schema = {
        message: Joi.string().max(10000).required(),
    };
    return Joi.validate(comment, schema);
}

exports.validateComment = validateComment;
exports.Comment = Comment;