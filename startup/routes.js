const express = require('express');
const groups = require('../routes/groups');
const users = require('../routes/users');
const auth = require('../routes/auth');
const error = require('../middleware/error');
const returns = require('../routes/returns');
const passport = require('passport');

module.exports = function (app) {

    app.use(express.json());
    app.use(passport.initialize());
    app.use('/api/groups', groups);
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use(error);

}