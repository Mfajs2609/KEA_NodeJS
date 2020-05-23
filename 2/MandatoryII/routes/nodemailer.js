const router = require('express').Router();
const nodemailer = require("nodemailer");

//------------------NodeMailer---------------------

/*
    app.post('/send', (req, res) => {
        const emailOutput = {
            "username": req.body.username,
            "email": req.body.email
        }
    });
*/
  // async..await is not allowed in global scope, must use a wrapp
  // create reusable transporter object using the default SMTP transport
 
  let transporter = nodemailer.createTransport({
      service: "Gmail",
    auth: {
      user: "math.hell26@gmail.com", // generated ethereal user
      pass: "19lpek95!2609!19lpek95" // generated ethereal password
    }
  });

  

    // send mail with defined transport object
    let mailOptions = {
    from: '"NodemailerTest" <math.hell26@gmail.com>', // sender address
    to: "wnl88929@eoopy.com", // list of receivers
    subject: "TestingNodemailer", // Subject line
    text: "testing", // plain text body
    HTML: "<h1>Hello World</h1>"
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if(error) {
          return console.log(error)
      }

    console.log("Message sent:");
  });

module.exports = router;