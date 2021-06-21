const nodemailer = require('nodemailer');
const config = require('config');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    ssl: true,
    auth: {
        user: config.get('email'),
        pass: config.get('password'),
    },
});

async function send(mailOptions) {

    if (config.get('isEmailMock')) {
        console.log(mailOptions);
        return null;
    }
    /*
        info object : -
        {
        accepted: [ 'aj941ga@gmail.com' ],
        rejected: [],
        envelopeTime: 1205,
        messageTime: 1214,
        messageSize: 594,
        response: '250 2.0.0 OK  1623385805 f6sm3703338pfb.28 - gsmtp',
        envelope: { from: 'abdullahjamal941ga@gmail.com', to: [ 'aj941ga@gmail.com' ] },
        messageId: '<dfaca87a-f1da-cb99-1a17-ff5532e3e7a8@gmail.com>'
        }
    */
    const { to, subject, text, html } = mailOptions;

    // for testing purpose just login the email in console
    return await transporter.sendMail({
        from: config.get('email'), // sender address
        to, // comma separated list of receivers
        subject, // Subject line
        text, // plain text body
        html, // html body
    }, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log(info.response);
        }
    });
};
// send mail with defined transport object

module.exports = {
    send
};