const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validate, validateEmail, validatePassword } = require('../models/user');
const express = require('express');
const auth = require('../middleware/auth');
const mail = require('../services/mail');
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();

router.get('/me', auth, async (req, res) => {

    const user = await User.findById(req.user._id)
        .select('-password, -authentication_token');
    res.send(user);
});
/*
    @body {name, email, password}
*/
router.post('/register', async (req, res) => {

    // validate
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // user is not already registered
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered');

    user = new User(_.pick(req.body, ['name', 'email', 'password']));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    // send mail to authentication mail to client
    mail.sendAuthMail(user);
    res.status(200).send(`verification mail sent successfully to ${user.email}`);
});
/*
    @param: token
*/
router.get('/activate', async (req, res) => {

    const token = req.query.token;
    if (!token) return res.status(400).send('No token provided');

    // verify token, if found invalid return;
    let _id;
    try {
        const decoded = jwt.verify(token, config.get('jwt-mail-verification-key'));
        _id = decoded._id;
    }
    catch (ex) {
        return res.status(400).send('Invalid token.');
    }

    // if email is already verified
    const user = await User.findById(_id);
    if (user.isVerified) return res.status(400).send('Email is already verified');

    // if valid set user to verified
    user.isVerified = true;
    await user.save();

    // Email verified successfully
    return res
        .header('x-auth-token', user.generateAuthToken())
        .redirect(`${config.get(frontend - url)}login`);
});
/*
    @body {email}
*/
router.post('/reset-password', async (req, res) => {

    // verify body for email syntax
    const { error } = validateEmail(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if any user has this email address
    const user = await User.findOne({ email: req.body.email });

    // if no user found with email address
    if (!user) return res.status(404).send('Email not found');
    if (!user.isVerified) return res.status(400).send('Email not verified');

    // send reset password mail
    mail.sendResetPaswordMail(user);
    return res.status(200).send(`reset password mail sent successfully to ${user.email}`);
});

/*
    @param token
    @body {password}
*/
router.get('/reset-password', async (req, res) => {

    const token = req.query.token;
    if (!token) return res.status(400).send('No token provided');

    // verify body for password syntax
    const { error } = validatePassword(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // verify params for jwt-mail-key
    let _id;
    try {
        const decoded = jwt.verify(token, config.get('jwt-mail-verification-key'));
        _id = decoded._id;
    }
    catch (ex) {
        return res.status(400).send('Invalid token.');
    }
    const user = await User.findById(_id);

    // encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);

    // update password
    await user.save();

    // redirect to frontend login page
    return res
        .header('x-auth-token', user.generateAuthToken())
        .redirect(`${config.get('frontend-url')}login`);
});

// TODO @route GET : resend activation mail

module.exports = router;
