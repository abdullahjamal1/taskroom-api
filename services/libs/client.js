const aws = require('aws-sdk');
const config = require('config');

aws.config.update({
    // credentials: fromIni({ profile: 'admin_jamal' }),
    secretAccessKey: config.get('aws-secret-access-key'),
    accessKeyId: config.get('aws-access-key-id'),
    region: config.get('aws-region')
});

module.exports = {aws};