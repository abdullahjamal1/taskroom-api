const { Group } = require('../models/group');

/*
    Description: makes the user member of all groups of which it received invitations
    by adding the user in every groups member array

    TODO: refactor to remove async from map
    
    @Param user: {groups}
*/
async function joinPendingGroups(user) {

    if (user.groups.length > 0) {
        user.groups.map(async (g) => {

            let group = await Group.findById(g);
            let members = [...group.members];
            members = members.filter(m => m.email !== user.email);
            group.members = [...members, user];
            await group.save();
        });
    }
}

async function updateUsersNotificationForGroups(user) {

    await Group.updateMany({ 'members.email': user.email },
        { $set: { 'members.$.isNotificationEnabled': user.isNotificationEnabled } });
}

module.exports = {
    joinPendingGroups,
    updateUsersNotificationForGroups
}