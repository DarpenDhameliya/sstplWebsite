
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const hire = require("../Model/Hire");
const Authenticate = require("../Middleware/Authenticate");
const { errormessage ,successmessage , successmessageValidate} = require("../response/Response");
const fs = require('fs');
const path = require('path');

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
        //  to: 'darpen.sstpl@gmail.com',
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
        // html:html
      };
      transporter.sendMail(mailOptions , (error, info) => {
        if (error) {
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
        // html:html
      };

    
      transporter.sendMail(mailOptionsUser);
      hire
        .create({
          name: name,
          email: email,
          contact: phone,
          technology: selectval,
          skype_id: skype,
          work_detai:work
        })
        .then((result) => {
          return res.status(200).send(successmessage(["Add Successfully"]));
        })
        .catch((error) => {
          return res.status(500).send(errormessage(error));
        });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/hire-list",Authenticate, async (req, res) => {
  let {page_size, pageNumber} = req.body;
  // const page_size = 8
  // const pageNumber = 1
  const skip = (pageNumber - 1) * page_size;
  const totalRecords = await hire.countDocuments({});
  const totalPages = Math.ceil(totalRecords / page_size);
  console.log(totalRecords)
    console.log(totalPages);
    hire.find({}, { __v: 0 })
    .skip(skip)
    .limit(page_size) // per page_size
    .then((result) => {
      return res.status(200).send(successmessageValidate(result,totalPages));
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send(errormessage(error));
    });
});

router.delete("/hire_delete/:id", Authenticate, (req, res) => {
  let id = req.params.id;
  if (!id) {
    return res.status(402).send(errormessage("Required"));
  } else {
    hire.findByIdAndDelete(id)
      .then((result) => {
        return res.status(200).send(successmessage('Delete Successfully'));
      })
      .catch((err) => {
        return res.status(402).send(errormessage(err));
      });
  }
});

module.exports = router;
