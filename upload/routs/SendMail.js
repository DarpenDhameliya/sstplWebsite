const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${req.body.name}-${file.originalname}`);
  },
});
const maxSize = 1 * 1000 * 1000;
var upload = multer({
  storage: storage,
  limits: {fileSize: maxSize},
  fileFilter: function (req, file, cb) {
    var filetypes = /pdf|jpeg|jpg|png/;
    var mimetype = filetypes.test(file.mimetype);
    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    let docextension = path.extname(file.originalname).toLowerCase();
    if ((mimetype && extname) || docextension == ".docx" || docextension == ".doc") {
      return cb(null, true);
    } else {
      return cb(null, false);
    }
  },
}).single("file");

router.post("/pdf", upload, async (req, res) => {
  let filename = "";
  let filepath = "";
  let errors = "";
  let error = {};
  const PASS = process.env.MAIL_PASS;
  const ID = process.env.MAIL_ID;
  if (!req.file || !req.body.name || !req.body.email || !req.body.phone || !req.body.apply) {
    if (!req.file) {
      error.file = "file type must be pdf , jpeg , jpg ,png , docx ";
    }
    if (!req.body.name) {
      error.name = "name require";
    }
    if (!req.body.email) {
      error.email = "email require";
    }
    if (!req.body.phone) {
      error.phone = "phone no. require";
    }
    if (!req.body.apply) {
      error.apply = "apply language required";
    }
    return res.status(402).send(error);
  } else {
    let data = {};
    data.name = req.body.name;
    data.email = req.body.email;
    data.phone = req.body.phone;
    data.applyfor = req.body.apply;

    if (req.file === undefined) {
      return res.status(402).send("please add required files");
    } else {
      let record = JSON.stringify(data);
      filepath = req.file.path;
      filename = req.file.filename;
      let pathfile = path.join(__dirname, "../", filepath);

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: ID,
          pass: PASS,
        },
      });

      let mailOptions = {
        to: ID,
        subject: req.body.apply,
        text: record,
        html: `<table>
          <tr>
          <th>name</th>
          <td>${req.body.name}</td>
          </tr>
          <tr>
           <th>email</th>
           <td>${req.body.email}</td>
          </tr>
          <tr>
            <th>phone</th>
            <td>${req.body.phone}</td>
          </tr>
          <tr>
            <th>Apply for</th>
            <td>${req.body.apply}</td>
          </tr>
          </table>`,
        attachments: [
          {
            filename: filename,
            path: pathfile,
          },
        ],
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(402).send(error);
        } else {
          return res.status(200).send("email send successfully");
        }
      });

      let mailOptionsUser = {
        to: req.body.email,
        subject: "Conformation of your inquiry",
        html: `<table>
            <tr>
            <th>First name</th>
            <td>${req.body.name}</td>
            </tr>
            <tr>
             <th>email</th>
             <td>${req.body.email}</td>
            </tr>
            <tr>
              <th>phone</th>  
              <td>${req.body.phone}</td>
            </tr>
            <tr>
              <th>Technology</th>  
              <td>${req.body.apply}</td>
            </tr>
            </table>`,
      };

      // transporter.sendMail(mailOptionsUser, (error, info) => {
      //   if (error) {
      //     console.log(error);
      //     return res.status(402).send(error);
      //   } else {
      //     return res.status(200).send("email send successfully");
      //   }
      // });
      transporter.sendMail(mailOptionsUser)
    }
  }
  // });
});
// router.post("/pdf", upload , async (req, res) => {
//   let filename = "";
//   let filepath = "";
//   let errors = "";
//   let error = {};
//     console.log("0000000000", req.body);
//     console.log("upload ==========", req.file);

//   // });
// });

module.exports = router;
