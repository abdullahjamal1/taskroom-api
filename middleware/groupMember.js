const { Group } = require('../models/group');

/*
    Description: middleware for resources which only members of
    a particular group can access

    if req.params is not set, then check for req.query
*/
module.exports = async function (req, res, next) {

    const group = await Group.findById(req.params.id);
    const member = group.members.filter(member => member._id === req.user._id);

    if (!member) return res.status(403).send('Access denied');

    req.group = group;
    next();
}