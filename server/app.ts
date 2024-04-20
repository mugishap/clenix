import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import http from 'http';
import nodemailer from 'nodemailer';

config()

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: "*" }))
app.disable('x-powered-by');

const transporter = nodemailer.createTransport({
    service: "gmail",
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

transporter.verify(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});


app.post('/api/v1/send-mail', async (req, res) => {
    try {
        const { email, names, telephone, text } = req.body
        await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: 'mathierry@tzoo.ca',
            cc: 'info@tzzo.ca',
            subject: `You have received a message from a client - ${names}`,
            replyTo: email,
            text: `Name: ${names}\nEmail: ${email}\nTelephone: ${telephone}\nMessage: ${text}`
        });
        return res.status(200).json({
            message: "Email sent successfully",
            status: true
        });
    } catch (error) {
        return res.status(500).json({ message: "Unable to send email", status: false });
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})