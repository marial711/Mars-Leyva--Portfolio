const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
 

router.post(`/`, async(req, res) => {
    let { name, email, message } = req.body;

    // EMAIL CONNECTION
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const emailMessage = {
        from: `${name}`,
        to: process.env.EMAIL,
        subject: `New Viewer Inquiry`,
        html:`
            <h1>${name}</h1>
            <h2>${email}</h2>
            <p>${message}</p> `
    };

    await transporter.sendMail(emailMessage, (error) => {
        if(error) {
            res.json({status: `ERROR`});
        } else {
            res.json({status: `Message Sent`});
        }
    });
});

module.exports = router;