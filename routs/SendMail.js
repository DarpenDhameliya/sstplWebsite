const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const career = require("../Model/Career");
const {errormessage, successmessage, successmessageValidate} = require("../response/Response");
const Authenticate = require("../Middleware/Authenticate");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files/careerInquiry");
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
  let {name, email, phone, apply} = req.body;
  let filename = "";
  let filepath = "";
  let errors = "";
  let error = {};
  const PASS = process.env.MAIL_PASS;
  const ID = process.env.MAIL_ID;

  let filePath = "./mail-responce/HR_Mail.html";
  var data = fs.readFileSync(filePath, "utf8");
  // console.log(html)
  const updatedContent = data.replace("Hey Candidate Name", `hey ${name}`);
  fs.writeFileSync(filePath, updatedContent, "utf8");
  var html = fs.readFileSync(filePath, "utf8");
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
    career.create({
      name: name,
      email: email,
      contact: phone,
      apply_for: apply,
      resume: req.file.filename,
    });

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
        // to: ID,
        to: "darpen.sstpl@gmail.com",
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
        // html: `<table>
        //     <tr>
        //     <th>First name</th>
        //     <td>${req.body.name}</td>
        //     </tr>
        //     <tr>
        //      <th>email</th>
        //      <td>${req.body.email}</td>
        //     </tr>
        //     <tr>
        //       <th>phone</th>  
        //       <td>${req.body.phone}</td>
        //     </tr>
        //     <tr>
        //       <th>Technology</th>  
        //       <td>${req.body.apply}</td>
        //     </tr>
        //     </table>`,
        html: html,
      };

      transporter.sendMail(mailOptionsUser);
    }
  }
  // });
});

router.post("/career-list", Authenticate, async (req, res) => {
  let {page_size, pageNumber} = req.body;
  const skip = (pageNumber - 1) * page_size;
  const totalRecords = await career.countDocuments({});
  const totalPages = Math.ceil(totalRecords / page_size);
  let senddata = [];
  career
    .find({}, {__v: 0})
    .skip(skip)
    .limit(page_size) // per page_size
    .then((data) => {
      data.map((result) => {
        console.log(result);
        let url = `http://192.168.0.235:5000/careerInquiry/${result.resume}`;
        let single = {};
        single["id"] = result._id;
        single["name"] = result.name;
        single["email"] = result.email;
        single["contact"] = result.contact;
        single["apply_for"] = result.apply_for;
        single["resume"] = result.resume;
        single["resumedownload"] = url;
        senddata.push({...single});
      });
      console.log(senddata);
      return res.status(200).send(successmessageValidate(senddata, totalPages));
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send(errormessage(error));
    });
});

router.delete("/career_delete/:id", Authenticate, (req, res) => {
  let id = req.params.id;

  var filepath = "files/careerInquiry";
  var fileName;
  if (!id) {
    return res.status(402).send(errormessage("Required"));
  } else {
    career.findById(id, {__v: 0}).then((data) => {
      //   console.log('=============>',data.resume)
      fileName = data.resume;
      console.log(fileName);
      let filemainPath = path.join(filepath, fileName);
      console.log(filemainPath);
      fs.unlink(filemainPath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
          return;
        } else {
          career
            .findByIdAndDelete(id)
            .then((result) => {
              return res.status(200).send(successmessage("Delete Successfully"));
            })
            .catch((err) => {
              return res.status(402).send(errormessage(err));
            });
        }
      });
    });
  }
});

module.exports = router;
