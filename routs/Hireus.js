const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const hire = require("../Model/Hire");
const Authenticate = require("../Middleware/Authenticate");
const { errormessage, successmessage, successmessageValidate } = require("../response/Response");
const fs = require("fs");
const path = require("path");
const Captchacheck = require("../Middleware/CaptchCheck");

router.post("/hireus", Captchacheck, async (req, res) => {
  try {
    const { name, email, phone, selectval, skype, work } = req.body;
    let filePath = "./mail-responce/Mail_send_res.html";
    var html = fs.readFileSync(filePath, "utf8");
    let error = {};
    const pass = process.env.MAIL_PASS;
    const id = process.env.MAIL_ID;

    var userid = req.header("Userdetails");
    const userAgent = req.headers["user-agent"];
    var browserName = "Unknown";
    var formattedContent = work.replace(/\n/g, " ");
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
          subject: `Hire US for ${work}`,
          html: `<table>
            <tr>
            <th>Name :</th>
            <td>${name}</td>
            </tr>
            <tr>
             <th>email :</th>
             <td>${email}</td>
            </tr>
            <tr>
              <th>phone :</th>
              <td>${phone}</td>
            </tr>
            <tr>
              <th>Technology :</th>
              <td>${selectval}</td>
            </tr>
            <tr>
            <th>Skype Id :</th>
            <td>${skype}</td>
            </tr>
            <tr>
              <th>work Details :</th>
              <td>${work}</td>
            </tr>
            </table>`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return res.status(402).send(error);
          } else {
            return res.status(200).send("email send successfully");
          }
        });
        let mailOptionsUser = {
          to: email,
          subject: "Thank you for Inquiry at SoftStorm",
          html: html,
        };

        transporter.sendMail(mailOptionsUser);
        hire
          .create({
            name: name,
            email: email,
            contact: phone,
            technology: selectval,
            skype_id: skype,
            work_detai: formattedContent,
            ip: userid,
            browsernm_browsever: browserName,
            mobile: isMobile,
          })
          .then((result) => {
            return res.status(200).send(successmessage(["Add Successfully"]));
          })
          .catch((error) => {
            return res.status(500).json(errormessage(error));
          });
      }
    } catch (error) {
      return res.status(500).json(errormessage(error));
    }
  } catch (error) {}
});

router.post("/hire-list", Authenticate, async (req, res) => {
  try {
    let { page_size, pageNumber } = req.body;
    const skip = (pageNumber - 1) * page_size;
    const totalRecords = await hire.countDocuments({});
    const totalPages = Math.ceil(totalRecords / page_size);
    hire
      .find({}, { __v: 0 })
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

router.delete("/hire_delete/:id", Authenticate, (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.status(402).json(errormessage("Required"));
    } else {
      hire
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