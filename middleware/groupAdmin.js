const Group = require('../models/group');

/*
    Description: middleware for resources which only admin of 
    a particular group can access
*/
module.exports = async function (req, res, next) {

    const group = await Group.findById(req.params.id);

    if (group.admin._id !== req.user._id)
        return res.status(403).send('Access denied');

    req.group = group;
    next();
}