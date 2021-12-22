'use strict'
var config = require('../config')
var sendgrid = require('@sendgrid/mail')

sendgrid.setApiKey(config.sendgridKey)


exports.send = async(to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'mikhailrommulo@gmail.com',
        subject: subject,
        text: 'and easy to do anywhere, even with Node.js',
        html: body
    })
}

