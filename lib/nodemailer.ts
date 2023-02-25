import * as dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: email,
    pass: password,
  },
  secure: true,
});

export const mailOptions = {
  from: email,
  to: email,
  subject: 'New message from contact form',
  text: 'You have a new message',
};
