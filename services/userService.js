const { User } = require("../models/user");
const mail = require("../services/mail");

/*
    Decription: takes an array of unverified emails as input .Creates new 
    users with their names as emails for non-registered users.

    @Param unVerifiedEmails: []
    @Param title
    @Param admin
    @Return users
*/
async function createNewUsers(unVerifiedEmails, title, admin) {
    let nonRegisteredUsers = unVerifiedEmails.map((email) => {
        return { email: email, name: email };
    });
    // Create an account for nonRegistered users and send invites
    const users = await User.insertMany(nonRegisteredUsers);
    users.forEach(user => mail.sendTaskroomInvite(user, title, admin));
    return users;
}

module.exports = {
    createNewUsers
}