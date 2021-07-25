const { aws } = require('../services/libs/client');
const config = require('config');

/*
@Param options: {
    to : [],
    cc: [],
    text: ''
    subject: '',
    body: '',
}
*/
async function send(options) {


    if (config.get('isEmailMock')) {
        console.log(options);
        return null;
    }

    console.log(options);

    const { to, cc, text, subject, html: body } = options;
    // Create sendEmail params 
    const params = {
        Destination: { /* required */
            CcAddresses: [],
            ToAddresses: to,
        },
        Message: { /* required */
            Body: { /* required */
                Html: {
                    Charset: "UTF-8",
                    Data: body
                },
                Text: {
                    Charset: "UTF-8",
                    Data: text
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: subject
            }
        },
        Source: config.get('email'), /* required */
        // ReplyToAddresses: [
        //     'EMAIL_ADDRESS',
        //     /* more items */
        // ],
    };

    // Create the promise and SES service object
    try {
        await new aws.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();
    }
    catch (ex) {
        console.log('error', ex);
    }
};
// send mail with defined transport object

module.exports = {
    send
};