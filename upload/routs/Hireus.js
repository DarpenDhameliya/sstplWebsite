const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/hireus", async (req, res) => {
  const {name, email, phone, selectval, skype, work} = req.body;
  let error = {};
  const pass = process.env.MAIL_PASS;
  const id = process.env.MAIL_ID;
  try {
    if (!name || !email || !phone || selectval.length === 0 || !work) {
      if (!name) {
        error.name = "name Required";
      }
      if (!email) {
        error.email = "email require";
      }
      if (!phone) {
        error.phone = "phone no. require";
      }
      if (selectval.length === 0) {
        error.hiredev = "Lenguage require !";
      }
      if (!work) {
        error.work = "Work Details require !";
      }
      return res.status(402).send(error);
    } else {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: id,
          pass: pass,
        },
      });

      let mailOptions = {
        to: id,
        subject: work,
        html: `<table>
          <tr>
          <th>First name</th>
          <td>${name}</td>
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
            <td>${selectval}</td>
          </tr>
          <tr>
          <th>Skype Id</th>
          <td>${skype}</td>
          </tr>
          <tr>
            <th>work Details</th>
            <td>${work}</td>
          </tr>
          </table>`,
      };
      transporter.sendMail(mailOptions , (error, info) => {
        if (error) {
          console.log(error);
          return res.status(402).send(error);
        } else {
          return res.status(200).send("email send successfully");
        }
      });
      let mailOptionsUser = {
        to: email,
        subject: "Conformation of your inquiry",
        html: `<table>
          <tr>
          <th>First name</th>
          <td>${name}</td>
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
            <td>${selectval}</td>
          </tr>
          
          <tr>
            <th>work Details</th>
            <td>${work}</td>
          </tr>
          </table>`,
      };

    
      transporter.sendMail(mailOptionsUser , (error, info) => {
        if (error) {
          console.log(error);
          return res.status(402).send(error);
        } else {
          return res.status(200).send("email send successfully");
        }
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
