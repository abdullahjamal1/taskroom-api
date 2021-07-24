const mail = require('../startup/mail');
const config = require('config');
/*
    takes a list of members and sends emails to only those who are verified and have
    notfications enabled

    @Param members: [User]
    @Param mailOptions: {subject, text, html}
*/
function sendToVerified(members, mailOptions) {

    const notificationTogglingUrl = `${config.get('app-url')}settings`;
    mailOptions.html = `${mailOptions.html} <br><hr/> 
                        <small>To unsubscribe from receiving notifications from TaskRoom
                         <a href="${url}">click here</a> </small>`
    members
        .filter(member => member.isVerified && member.isNotificationEnabled)
        .map(m => m.email)
        .forEach(email => {
            mailOptions.to = email;
            mail.send(mailOptions);
        });
}

/*
    @Param user: { email}
    @Param group: {title, admin: {email, name}}
*/
function sendTaskroomInvite(user, title, admin) {

    const url = `${config.get('app-url')}reset-password-change?token=${user.generateMailVerificationToken()}`;

    const mailOptions = {
        to: [user.email],
        subject: `Group Invitation`,
        text: `taskroom invitation`,
        html: `<p>You have been invited by ${admin.email} to join project ${title}. <br/>
               <a href="${url}"><h6>Click here</h6></a> to verify your email and join taskroom. </p>`
    }
    mail.send(mailOptions);
}

function sendTaskUpdationNotification(group, task) {

    // only verified members receive task notification

    let timeline = task.timeline[task.timeline.length - 1];
    const { action, user } = timeline;

    let html;
    if (action === 'updated') {
        html = `<p>Task ${task.title} is updated by ${user.name}(${user.email}) </p>`;
    }
    else {
        html = `<p>Task ${task.title} is moved to <strong>${action}</strong> column by ${user.name}(${user.email})</p>`;
    }

    const mailOptions = {
        subject: `Task ${task.title} updated`,
        text: `Task ${task.title} is completed`,
        html
    }
    sendToVerified(group.members, mailOptions);
}

function sendTaskNotification(group, task) {

    // only verified members receive task notification
    const mailOptions = {
        subject: `New task posted in ${group.title}`,
        text: `${task.author.name} has added new task, ${task.title} `,
        html: `<p>${task.author.name} posted a new task, ${task.title} in ${group.title} </p>
                <br/> <p><strong>Description:</strong> ${task.description} </p>`
    }
    sendToVerified(group.members, mailOptions);
}

function sendGroupRemovalMail(members, group, admin) {

    const mailOptions = {
        subject: `Removed from group ${group.title}`,
        text: `${admin.name} has removed you from ${group.title}`,
        html: `<p> ${admin.name} has removed you from ${group.title}</p>`
    }

    sendToVerified(members, mailOptions);
}

function sendJoiningNotification(members, group, admin) {

    const mailOptions = {
        subject: "Joined new group",
        text: `${admin.email} added you in a new group, ${group.title}`,
        html: `${admin.email} added you in a new group, ${group.title} <br/> <a href="${config.get('app-url')}groups/${group._id}"><H2>view group</H2></a>`,
    }
    sendToVerified(members, mailOptions);
}

function sendAuthMail(user) {

    const url = `${config.get('api-url')}/api/users/activate?token=${user.generateMailVerificationToken()}`;

    const mailOptions = {
        to: [user.email],
        subject: "Verify your Email Address",
        text: `Visit this ${url}`,
        html: '<a href="' + url + '"><H2>verify Email</H2></a>'
    }
    mail.send(mailOptions);
}

function sendResetPaswordMail(user) {

    const url = `${config.get('app-url')}reset-password-change?token=${user.generateMailVerificationToken()}`;

    const mailOptions = {
        to: [user.email],
        subject: "Reset Password",
        text: "Visit this",
        html: '<a href="' + url + '"><H2>Reset Password</H2></a>'
    }
    mail.send(mailOptions);
}

module.exports = {
    sendAuthMail,
    sendResetPaswordMail,
    sendJoiningNotification,
    sendGroupRemovalMail,
    sendTaskNotification,
    sendTaskUpdationNotification,
    sendTaskroomInvite
}