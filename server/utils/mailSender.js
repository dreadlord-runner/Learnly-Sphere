const nodemailer = require("nodemailer");

/*
@desc Send an email to the user
@body email: String
@body title: String
@body body: String
@method POST
*/

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })


        let info = await transporter.sendMail({
            from: 'LearnlySphere || CodeHelp - by Mayank',
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        console.log(info);
        return info;
    }
    catch (error) {
        console.log(error.message);
    }
}


module.exports = mailSender;