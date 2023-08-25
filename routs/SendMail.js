const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const career = require("../Model/Career");
const captchcheck = require("../Middleware/CaptchCheck");
const {errormessage, successmessage, successmessageValidate} = require("../response/Response");
const Authenticate = require("../Middleware/Authenticate");
const ejs = require("ejs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files/service");
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
  try {
    
    let {name, email, phone, apply} = req.body;
    let filename = "";
    let filepath = "";
    let error = {};
    var browserName = "Unknown";
    var userid = req.header("Userdetails");
    var userAgent = req.headers["user-agent"];
  
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    if (userAgent.includes("MSIE")) {
      browserName = "Internet Explorer";
    } else if (userAgent.includes("Chrome")) {
      browserName = "Chrome";
    } else if (userAgent.includes("Firefox")) {
      browserName = "Firefox";
    } else if (userAgent.includes("Safari")) {
      browserName = "Safari";
    }
  
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
  
        const candidateName = name;
        const templatePath = path.join(__dirname, "../mail-responce", "HR_Mail.html");
        var html = await ejs.renderFile(templatePath, {candidateName});
  

          career
          .create({
            name: name,
            email: email,
            contact: phone,
            apply_for: apply,
            resume: filename,
            ip: userid,
            browsernm_browsever: browserName,
            mobile: isMobile,
          })
          
  
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: ID,
            pass: PASS,
          },
        });
  
        let mailOptions = {
          to: ID,
          subject: `${apply} - ${name}`,
          html: `<table>
            <tr>
            <th>name</th>
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
              <th>Apply for</th>
              <td>${apply}</td>
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
          to: email,
          subject: "Conformation of your inquiry",
          html: html,
        };
  
        transporter.sendMail(mailOptionsUser);
      }
    }
  } catch (error) {
    return res.status(500).json(errormessage(error))
  }
});

router.get("/career-list/:pageno/:rowperpage", Authenticate, async (req, res) => {
  try {
    const pageNumber = req.params.pageno;
    const page_size = req.params.rowperpage;
    // let {page_size, pageNumber} = req.body;
    const ID = process.env.BASEURL;

    const skip = (pageNumber - 1) * page_size;
    const totalRecords = await career.countDocuments({});
    const totalPages = Math.ceil(totalRecords / page_size);
    let senddata = [];

    career
      .find({}, {__v: 0})
      .skip(skip)
      .sort({ date: -1 })
      .limit(page_size)
      .then((data) => {
        if(data.length === 0){
          return res.status(200).send(successmessage('No Record Found'));
        }
        data.map((result) => {
          let url = `${ID}/careerInquiry/${result.resume}`;
          let single = {};
          single["id"] = result._id;
          single["name"] = result.name;
          single["email"] = result.email;
          single["contact"] = result.contact;
          single["apply_for"] = result.apply_for;
          single["resume"] = result.resume;
          single["resumedownload"] = url;
          single["ip"] = result.ip;
          single["browsernm_browsever"] = result.browsernm_browsever;
          single["mobile"] = result.mobile;
          single["date"] = result.date;
          senddata.push({...single});
        });
        return res.status(200).send(successmessageValidate(senddata, totalPages));
      })
      .catch((error) => {
        return res.status(404).json(errormessage(error));
      });
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});

router.delete("/career_delete/:id", Authenticate, (req, res) => {
  try {
    let id = req.params.id;

    var filepath = "files/careerInquiry";
    var fileName;
    if (!id) {
      return res.status(402).json(errormessage("Required"));
    } else {
      career.findById(id, {__v: 0}).then((data) => {
        fileName = data.resume;
        let filemainPath = path.join(filepath, fileName);
        fs.unlink(filemainPath, (err) => {
          if (err) {
            career
              .findByIdAndDelete(id)
              .then((result) => {
                return res.status(200).send(successmessage("Remove Successfully "));
              })
              .catch((err) => {
                return res.status(402).json(errormessage(err));
              });
          } else {
            career
              .findByIdAndDelete(id)
              .then((result) => {
                return res.status(200).send(successmessage("Delete Successfully"));
              })
              .catch((err) => {
                return res.status(402).json(errormessage(err));
              });
          }
        });
      });
    }
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});

module.exports = router;
