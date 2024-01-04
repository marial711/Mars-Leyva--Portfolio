const express = require("express");
const router = express.Router();

// EMAIL CONNECTION
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

transporter.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Ready to Send");
    }
});
 
async function sendMail(req, res) {
    let {name, message,email} = req.body;
    const mailFormat = {
        from: `testtest`,
        to: process.env.EMAIL,
        subject: `Contact Submission from ${name}`,
        html: `<h1>${message}</h1>
        <p>${email}</p>
        <p>${name}</p>`
    }

    transporter.sendMail(mailFormat, (e, info) => {
        if(e) {
            res.status(500)
            res.send(e.message)
        }else {
            res.status(200)
            res.send(`Email has been sent!`)
        }
    })
}

module.exports = sendMail;