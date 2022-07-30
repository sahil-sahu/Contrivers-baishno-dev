import { SMTPClient } from 'emailjs';
require('dotenv').config()

// import { useRouter } from 'next/router'

export default async function handler(req, res) {

    // Get data submitted in request's body.
    const body = req.body
    // router.push(`mailto:${body.email}?subject=Message by ${body.name}!&body=${body.message}!`);
    
    return res.status(200).end(`
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv = "refresh" content = "0; url = mailto:info@baishnodevbuilder.com?subject=Message by ${body.name}: ${body.phone} &body=${body.message}"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    </body>
    
    </html>

    `);
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
  