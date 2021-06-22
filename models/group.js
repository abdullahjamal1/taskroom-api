const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    avatar_url: {
        type: String,
        required: false,
        minLength: 5,
        maxLength: 1024
    },
    email: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255
    }
});

const themes = ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'light', 'dark'];

const Group = mongoose.model('Groups', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 255
    },
    description: {
        type: String,
        required: true
    },
    admin: {
        type: userSchema,
        required: true
    },
    members: {
        type: [userSchema],
        required: true
    },
    theme: {
        type: String,
        enum: themes,
        default: 'primary',
        required: true,
    }
}));

function validateGroup(group) {

    const schema = {
        title: Joi.string().min(2).max(255).required(),
        description: Joi.string().min(2).max(1000).required(),
        members: Joi.array().items(Joi.string().min(5).max(255).required().email()),
        theme: Joi.string().valid(themes),
    };

    return Joi.validate(group, schema);
}

exports.Group = Group;
exports.validateGroup = validateGroup;
exports.userSchema = userSchema;