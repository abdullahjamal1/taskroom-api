const mail = require('../startup/mail');
const config = require('config');


async function sendInvites(members, group, admin) {

    const mailOptions = {
        to: members,
        subject: `Removed from group ${group.title}`,
        text: `${admin.name} has removed you from ${group.title}`,
        html: '<a href=""><H2></H2></a>'
    }
    await mail.send(mailOptions);
}

async function sendInvites(members, group, admin) {

    const mailOptions = {
        to: members,
        subject: "Group Invitation",
        text: `${admin.name} has invited you to join a new group, ${group.title}`,
        html: '<a href=""><H2>view group</H2></a>'
    }
    await mail.send(mailOptions);
}

async function sendAuthMail(user) {

    const url = `${config.get('app-url')}/api/users/activate?token=${user.generateMailVerificationToken()}`;

    const mailOptions = {
        to: user.email,
        subject: "Verify your Email Address",
        text: `Visit this ${url}`,
        html: '<a href="' + url + '"><H2>verify Email</H2></a>'
    }
    await mail.send(mailOptions);
}

async function sendResetPaswordMail(user) {

    const url = `${config.get('app-url')}/api/users/reset-password?token=${user.generateMailVerificationToken()}`;

    const mailOptions = {
        to: user.email,
        subject: "Reset Password",
        text: "Visit this",
        html: '<a href="' + url + '"><H2>Reset Password</H2></a>'
    }
    await mail.send(mailOptions);
}

module.exports = {
    sendAuthMail,
    sendResetPaswordMail,
    sendInvites,
    sendRemoveMail
}