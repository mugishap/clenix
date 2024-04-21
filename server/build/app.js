"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const nodemailer_1 = __importDefault(require("nodemailer"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ origin: "*" }));
app.disable('x-powered-by');
const transporter = nodemailer_1.default.createTransport({
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
    }
    else {
        console.log("Server is ready to take our messages");
    }
});
app.post('/api/v1/send-mail', async (req, res) => {
    try {
        const { email, names, telephone, text } = req.body;
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
    }
    catch (error) {
        return res.status(500).json({ message: "Unable to send email", status: false });
    }
});
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
