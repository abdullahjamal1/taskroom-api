const mail = require('../startup/mail');
const config = require('config');

/*
    @Param user: { email}
    @Param group: {title, admin: {email, name}}
*/
async function sendTaskroomInvite(user, title, admin) {

    const url = `${config.get('app-url')}reset-password-change?token=${user.generateMailVerificationToken()}`;

    const mailOptions = {
        to: user.email,
        subject: `Group Invitation`,
        text: `taskroom invitation`,
        html: `<p>You have been invited by ${admin.email} to join project ${title}. <br/>
               <a href="${url}"><h6>Click here</h6></a> to verify your email and join taskroom. </p>`
    }
    await mail.send(mailOptions);
}

async function sendTaskCompletionNotification(group, task) {

    const emails = group.members.map(m => m.email);

    const mailOptions = {
        to: emails,
        subject: `Task completed`,
        text: `Task ${task.title} is completed `,
        html: `<p>Task ${task.title} is completed</p>`
    }
    await mail.send(mailOptions);
}

async function sendTaskNotification(group, task) {

    // only verified members receive task notification
    const emails = group.members.filter(member => member.isVerified).map(m => m.email);

    const mailOptions = {
        to: emails,
        subject: `New task posted in ${group.title}`,
        text: `${task.author.name} has added new task, ${task.title} `,
        html: `<p>${task.author.name} posted a new task, ${task.title} in ${group.title} </p>
                <br/> <p><strong>Description:</strong> ${task.description} </p>`
    }
    await mail.send(mailOptions);
}

async function sendGroupRemovalMail(members, group, admin) {

    const mailOptions = {
        to: members,
        subject: `Removed from group ${group.title}`,
        text: `${admin.name} has removed you from ${group.title}`,
        html: `<p> ${admin.name} has removed you from ${group.title}</p>`
    }
    await mail.send(mailOptions);
}

async function sendJoiningNotification(members, group, admin) {

    const mailOptions = {
        to: members,
        subject: "Joined new group",
        text: `${admin.email} has invited you to join a new group, ${group.title}`,
        html: `${admin.email} added you in a new group, ${group.title} <br/> <a href="${config.get('app-url')}groups/${group._id}"><H2>view group</H2></a>`,
    }
    await mail.send(mailOptions);
}

async function sendAuthMail(user) {

    const url = `${config.get('api-url')}/api/users/activate?token=${user.generateMailVerificationToken()}`;

    const mailOptions = {
        to: user.email,
        subject: "Verify your Email Address",
        text: `Visit this ${url}`,
        html: '<a href="' + url + '"><H2>verify Email</H2></a>'
    }
    await mail.send(mailOptions);
}

async function sendResetPaswordMail(user) {

    const url = `${config.get('app-url')}reset-password-change?token=${user.generateMailVerificationToken()}`;

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
    sendJoiningNotification,
    sendGroupRemovalMail,
    sendTaskNotification,
    sendTaskCompletionNotification,
    sendTaskroomInvite
}