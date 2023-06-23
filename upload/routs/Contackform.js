const express = require('express')
const router = express.Router();
const nodemailer = require("nodemailer");

router.post('/contackusform', async (req, res) => {
  const { fname, lname, email, phone, textarea } = req.body
  var PASS = process.env.MAIL_PASS
  var ID = process.env.MAIL_ID
  let error = {}

  try {
    if (!fname || !email || !phone || !lname ) {
      if (!fname) {
        error.fname = 'Name require'
      }
      if (!lname) {
        error.sub = 'Subject require'
      }
      if (!email) {
        error.email = 'email require'
      }
      if (!phone) {
        error.phone = 'phone no. require'
      }
      console.log(error)
      return res.status(402).send(error)
    } else {
      console.log(ID)
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: ID,
          pass: PASS,
        }
      });
      let mailOptions = {
        to: "darpen.sstpl@gmail.com",
        subject: lname ? lname : textarea,
        html: `<table>
          <tr>
          <th>First name</th>
          <td>${fname}</td>
          </tr>
          <tr>
          <th>Subject</th>
          <td>${lname}</td>
          </tr>
          <tr>
           <th>email</th>
           <td>${email}</td>
          </tr>
          <tr>
            <th>phone</th>  
            <td>${phone}</td>
          </tr>
          <tr>
            <th>Apply for</th>
            <td>${textarea}</td>
          </tr>
          </table>`,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(402).json({err:error})
        } else {
          return res.status(200).send('email send succfully')
        }
      });

    let mailOptionsUser = {

      to: email,
      subject: "Conformation of your inquiry",
      html: `<table>
        <tr>
        <th>First name</th>
        <td>${fname}</td>
        </tr>
        <tr>
         <th>email</th>
         <td>${email}</td>
        </tr>
        <tr>
          <th>phone</th>  
          <td>${phone}</td>
        </tr>
        <tr>
          <th>Technology</th>  
          <td>${lname}</td>
        </tr>
        
        <tr>
          <th>work Details</th>
          <td>${textarea}</td>
        </tr>
        </table>`
    };


    transporter.sendMail(mailOptionsUser)
    }
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }

})

module.exports = router;