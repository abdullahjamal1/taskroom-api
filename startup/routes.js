const express = require('express');
const comments = require('../routes/comments');
const groups = require('../routes/groups');
const tasks = require('../routes/tasks');
const users = require('../routes/users');
const files = require('../routes/files');
const auth = require('../routes/auth');
const error = require('../middleware/error');
const passport = require('passport');
const cors = require('cors');

module.exports = function (app) {

    app.use(cors());
    app.use(express.json());
    app.use(passport.initialize());
    app.use('/api/files', files);
    app.use('/api/groups', groups);
    app.use('/api/tasks', tasks);
    app.use('/api/comments', comments);
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use(error);

}