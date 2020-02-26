require('dotenv').config();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('');

const msg = {
    to: 'sidkool58@gmail.com',
    from: 'desipapa@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
