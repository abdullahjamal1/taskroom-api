const { Group } = require('../models/group');

// TODO: handle for case when groupId and taskId are not related
/*
    Description: middleware for resources which only members of
    a particular group can access

    first check for query string then check for params.id
*/
module.exports = async function (req, res, next) {

    let group;
    
    if (req.query.groupId)
        group = await Group.findById(req.query.groupId);
    else
        group = await Group.findById(req.params.id);

    if (!group) return res.status(400).send('invalid groupId');

    const member = group.members.filter(member => member._id.toHexString() === req.user._id);

    if (!member[0]) return res.status(403).send('Access denied');

    req.group = group;
    next();
}