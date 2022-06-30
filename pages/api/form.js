import { SMTPClient } from 'emailjs';
require('dotenv').config()

export default async function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.name || !body.message) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'First or last name not found' })
    }
    // Found the name.
    // Sends a HTTP success code
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.CONTRIVERS_EMAIL,
        pass: process.env.CONTRIVERS_PASSWORD,
      },
      secure: true,
    })

    const mailData = {
      text: `Just for testing purpose`,
      from: `${body.email} ${process.env.CONTRIVERS_EMAIL}`,
      to: "contrivers512@gmail.com",
      subject: body.message,
     
    }

    transporter.sendMail(mailData, function (err, info) {
      if(err){
        console.log(err);
        res.status(400).end(JSON.stringify({ message:"Error" }));
      }
      else {
        console.log(info);
        res.status(200).end(JSON.stringify({ message:"Done Homie" }));
      }
    })

  }
  