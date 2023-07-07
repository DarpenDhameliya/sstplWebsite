const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const contact = require("../Model/Contact");
const {errormessage, successmessage, successmessageValidate} = require("../response/Response");
const Authenticate = require("../Middleware/Authenticate");
const path = require("path");
const fs = require("fs");

router.post("/contackusform", async (req, res) => {
  const {fname, lname, email, phone, textarea} = req.body;

  var PASS = process.env.MAIL_PASS;
  var ID = process.env.MAIL_ID;
  let error = {};
  let filePath = "./mail-responce/Mail_send_res.html";
  var html = fs.readFileSync(filePath, "utf8")

  try {
    if (!fname || !email || !phone || !lname) {
      if (!fname) {
        error.fname = "Name require";
      }
      if (!lname) {
        error.sub = "Subject require";
      }
      if (!email) {
        error.email = "email require";
      }
      if (!phone) {
        error.phone = "phone no. require";
      }
      console.log(error);
      return res.status(402).send(error);
    } else {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: ID,
        pass: PASS,
      },
    });
    let mailOptions = {
      // to: ID,
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
        return res.status(402).json({err: error});
      } else {
        return res.status(200).send("email send succfully");
      }
    });

    let mailOptionsUser = {
      to: email,
      subject: "Conformation of your inquiry",
      // html: `<table>
      // <tr>
      // <th>First name</th>
      // <td>${fname}</td>
      // </tr>
      // <tr>
      //  <th>email</th>
      //  <td>${email}</td>
      // </tr>
      // <tr>
      //   <th>phone</th>
      //   <td>${phone}</td>
      // </tr>
      // <tr>
      //   <th>Technology</th>
      //   <td>${lname}</td>
      // </tr>

      // <tr>
      //   <th>work Details</th>
      //   <td>${textarea}</td>
      // </tr>
      // </table>`,
      html: html,
    };

    transporter.sendMail(mailOptionsUser);

    contact
      .create({
        name: fname,
        email: email,
        contact: phone,
        subject: lname,
        help: textarea,
      })
      .then((result) => {
        return res.status(200).send(successmessage(["Add Successfully"]));
      })
      .catch((error) => {
        return res.status(500).send(errormessage(error));
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.post("/contact-list", Authenticate, async (req, res) => {
  let {page_size, pageNumber} = req.body;

  const skip = (pageNumber - 1) * page_size;
  const totalRecords = await contact.countDocuments({});
  const totalPages = Math.ceil(totalRecords / page_size);
  console.log(totalRecords);
  let senddata = [];
  contact
    .find({}, {__v: 0})
    .skip(skip)
    .limit(page_size) // per page_size
    .then((result) => {
      return res.status(200).send(successmessageValidate(result, totalPages));
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send(errormessage(error));
    });
});

router.delete("/contact_delete/:id", Authenticate, (req, res) => {
  let id = req.params.id;
  if (!id) {
    return res.status(402).send(errormessage("Required"));
  } else {
    contact
      .findByIdAndDelete(id)
      .then((result) => {
        return res.status(200).send(successmessage("Delete Successfully"));
      })
      .catch((err) => {
        return res.status(402).send(errormessage(err));
      });
  }
});

module.exports = router;
