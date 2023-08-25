
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const contact = require("../Model/Contact");
const {errormessage, successmessage, successmessageValidate} = require("../response/Response");
const Authenticate = require("../Middleware/Authenticate");
const path = require("path");
const fs = require("fs");
const Captchacheck = require("../Middleware/CaptchCheck");

router.post("/contackusform" ,Captchacheck, async (req, res) => {
  const {fname, lname, email, phone, textarea} = req.body;
  
  var PASS = process.env.MAIL_PASS;
  var ID = process.env.MAIL_ID;
  let error = {};
  let filePath = "./mail-responce/Mail_send_res.html";
  var html = fs.readFileSync(filePath, "utf8");
  var userid = req.header("Userdetails");
  const userAgent = req.headers["user-agent"];
  var browserName = "Unknown";
  
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  if (userAgent.includes("MSIE")) {
    browserName = "Internet Explorer";
  } else if (userAgent.includes("Chrome")) {
    browserName = "Chrome";
  } else if (userAgent.includes("Firefox")) {
    browserName = "Firefox";
  } else if (userAgent.includes("Safari")) {
    browserName = "Safari";
  }


  var formattedContent = textarea.replace(/\n/g,' ');
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
      return res.status(402).send(error);
    } else {
      contact.create({
        name: fname,
        email: email,
        contact: phone,
        subject: lname,
        help: formattedContent,
        ip: userid,
        browsernm_browsever: browserName,
        mobile: isMobile,
      });
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: ID,
          pass: PASS,
        },
      });

      let mailOptions = {
        to: ID,
        subject: lname ? `Contact Us ${lname}` : `Contact Us ${textarea}`,
        html: `<pre><table>
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
            <th>Messager</th>
            <td>${textarea}</td>
          </tr>
          </table>
          </pre>`,
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
        html: html,
      };

      transporter.sendMail(mailOptionsUser);

     
    }
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});

router.post("/contact-list", Authenticate, async (req, res) => {
  try {
    let {page_size, pageNumber} = req.body;
    const skip = (pageNumber - 1) * page_size;
    const totalRecords = await contact.countDocuments({});
    const totalPages = Math.ceil(totalRecords / page_size);
    let senddata = [];
    contact
      .find({}, {__v: 0})
      .skip(skip)
      .sort({ date: -1 })
      .limit(page_size)
      .then((result) => {
        return res.status(200).send(successmessageValidate(result, totalPages));
      })
      .catch((error) => {
        return res.status(500).json(errormessage(error));
      });
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});

router.delete("/contact_delete/:id", Authenticate, (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.status(402).json(errormessage("Required"));
    } else {
      contact
        .findByIdAndDelete(id)
        .then((result) => {
          return res.status(200).send(successmessage("Delete Successfully"));
        })
        .catch((err) => {
          return res.status(402).json(errormessage(err));
        });
    }
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});

module.exports = router;
