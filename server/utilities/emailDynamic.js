import nodemailer from "nodemailer";
import getHtml from "./getHtml.js";

function getSubject(template) {
  switch (template) {
    case "Welcome":
      return "Welcome to our social app ✔";
    case "forgotpass":
      return "Instructions on how to change your password at social app";
    default:
      "";
  }
}
export default async function main(token, template) {
  const data = {
    from: '"Fred Foo 👻" <oblaczynska@gmail.com>', // sender address
    to: "zuchowskaizabela@op.pl", // list of receivers
    subject: getSubject(template),
    text: "Hello world", // plain text body
    html: getHtml(template, token),
  };
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // generated ethereal user
      pass: process.env.SMTP_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail();

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}
