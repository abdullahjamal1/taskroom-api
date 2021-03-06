const express = require('express')
const multer = require('multer')
const multerS3 = require('multer-s3')

const {aws} = require('./libs/client');
const s3 = new aws.S3();
const config = require('config');

function getFileKey(fileName, taskId, groupId) {
    return `group-${groupId}/task-${taskId}/${fileName}`;
}

const upload = multer({
    storage: multerS3({
        s3,
        acl: 'public-read',
        bucket: config.get('aws-bucket'),
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            const { groupId, taskId } = req.query;
            const fileName = Date.now() + '-' + file.originalname;
            cb(null, getFileKey(fileName, taskId, groupId));
        }
    })
});

async function deleteFile(key, taskId, groupId) {
    var params = { Bucket: config.get('aws-bucket'), Key: getFileKey(key, taskId, groupId) };

    try {
        await s3.deleteObject(params).promise();
    }
    catch (err) {
        console.log(err);
    }

}

module.exports = {
    deleteFile, upload
};

