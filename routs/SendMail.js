const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const career = require("../Model/Career");
const {errormessage, successmessage, successmessageValidate} = require("../response/Response");
const Authenticate = require("../Middleware/Authenticate");
const ejs = require("ejs");
var formidable = require("formidable");

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
  // limits: {fileSize: maxSize},
  // fileFilter: function (req, file, cb) {
  //   var filetypes = /pdf|jpeg|jpg|png/;
  //   var mimetype = filetypes.test(file.mimetype);
  //   var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  //   let docextension = path.extname(file.originalname).toLowerCase();
  //   if ((mimetype && extname) || docextension == ".docx" || docextension == ".doc") {
  //     return cb(null, true);
  //   } else {
  //     return cb(null, false);
  //   }
  // },
}).single("file");

// router.post("/pdf", upload, async (req, res) => {
//   try {
//     let {name, email, phone, apply} = req.body;
//     let filename = "";
//     let filepath = "";
//     let errors = "";
//     let error = {};
//     const PASS = process.env.MAIL_PASS;
//     const ID = process.env.MAIL_ID;
//     var userid = req.header("Userdetails");
//     const userAgent = req.headers["user-agent"];
//     var browserName = "Unknown";
//     var browserVersion = "";

//     const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
//     if (userAgent.includes("MSIE")) {
//       browserName = "Internet Explorer";
//       browserVersion = userAgent.split("MSIE")[1].split(";")[0].trim();
//     } else if (userAgent.includes("Chrome")) {
//       browserName = "Chrome";
//       browserVersion = userAgent.split("Chrome")[1].split(" ")[0].trim();
//     } else if (userAgent.includes("Firefox")) {
//       browserName = "Firefox";
//       browserVersion = userAgent.split("Firefox")[1].split(" ")[0].trim();
//     } else if (userAgent.includes("Safari")) {
//       browserName = "Safari";
//       browserVersion = userAgent.split("Version")[1].split(" ")[0].trim();
//     }

//     var fullBrowserName = browserName + " " + browserVersion;
//     const candidateName = name;
//     const templatePath = path.join(__dirname, "../mail-responce", "HR_Mail.html");
//     ejs.renderFile(templatePath, {candidateName});
//     // let filePath = "./mail-responce/HR_Mail.html";
//     // var data = fs.readFileSync(filePath, "utf8");
//     // const updatedContent = data.replace("Hey Candidate Name", `hey ${name}`);
//     // fs.writeFileSync(filePath, updatedContent, "utf8");
//     // var html = fs.readFileSync(filePath, "utf8");
//     // console.log(html)
//     // if (!req.file || !name || !email || !phone || !apply) {
//     //   if (!req.file) {
//     //     error.file = "file type must be pdf , jpeg , jpg ,png , docx ";
//     //   }
//     //   if (!name) {
//     //     error.name = "name require";
//     //   }
//     //   if (!email) {
//     //     error.email = "email require";
//     //   }
//     //   if (!phone) {
//     //     error.phone = "phone no. require";
//     //   }
//     //   if (!apply) {
//     //     error.apply = "apply language required";
//     //   }
//     //   return res.status(402).send(error);
//     // } else {
//     //   career.create({
//     //     name: name,
//     //     email: email,
//     //     contact: phone,
//     //     apply_for: apply,
//     //     resume: req.file.filename,
//     //     ip: userid,
//     //     browsernm_browsever: fullBrowserName,
//     //     mobile: isMobile,
//     //   });

//     //   let data = {};
//     //   data.name = req.body.name;
//     //   data.email = req.body.email;
//     //   data.phone = req.body.phone;
//     //   data.applyfor = req.body.apply;

//     //   if (req.file === undefined) {
//     //     return res.status(402).send("please add required files");
//     //   } else {
//     //     let record = JSON.stringify(data);
//     //     filepath = req.file.path;
//     //     filename = req.file.filename;
//     //     let pathfile = path.join(__dirname, "../", filepath);

//     //     let transporter = nodemailer.createTransport({
//     //       service: "gmail",
//     //       auth: {
//     //         user: ID,
//     //         pass: PASS,
//     //       },
//     //     });

//     //     let mailOptions = {
//     //       // to: ID,
//     //       to: "darpen.sstpl@gmail.com",
//     //       subject: `${apply} - ${name}`,
//     //       html: `<table>
//     //         <tr>
//     //         <th>name</th>
//     //         <td>${name}</td>
//     //         </tr>
//     //         <tr>
//     //          <th>email</th>
//     //          <td>${email}</td>
//     //         </tr>
//     //         <tr>
//     //           <th>phone</th>
//     //           <td>${phone}</td>
//     //         </tr>
//     //         <tr>
//     //           <th>Apply for</th>
//     //           <td>${apply}</td>
//     //         </tr>
//     //         </table>`,
//     //       attachments: [
//     //         {
//     //           filename: filename,
//     //           path: pathfile,
//     //         },
//     //       ],
//     //     };

//     //     mailOptions,
//     //       (error, info) => {
//     //         if (error) {
//     //           console.lgo("multer", error);
//     //           return res.status(402).send(error);
//     //         } else {
//     //           return res.status(200).send("email send successfully");
//     //         }
//     //       };

//     //     let mailOptionsUser = {
//     //       to: req.body.email,
//     //       subject: "Conformation of your inquiry",
//     //       html: html,
//     //     };

//     //     transporter.sendMail(mailOptionsUser);
//     //   }
//     // }
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json(errormessage(error));
//   }
// });

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
      .sort({date: -1})
      .skip(skip)
      .limit(page_size) // per page_size
      .then((data) => {
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
        console.log(filemainPath)
        fs.unlink(filemainPath, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
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

router.post("/pdf", async (req, res) => {
  try {

  var form = new formidable.IncomingForm();
  var PASS = process.env.MAIL_PASS;
  var ID = process.env.MAIL_ID;
  var userid = req.header("Userdetails");
  var userAgent = req.headers["user-agent"];
  var browserName = "Unknown";
  var browserVersion = "";

  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  if (userAgent.includes("MSIE")) {
    browserName = "Internet Explorer";
    browserVersion = userAgent.split("MSIE")[1].split(";")[0].trim();
  } else if (userAgent.includes("Chrome")) {
    browserName = "Chrome";
    browserVersion = userAgent.split("Chrome")[1].split(" ")[0].trim();
  } else if (userAgent.includes("Firefox")) {
    browserName = "Firefox";
    browserVersion = userAgent.split("Firefox")[1].split(" ")[0].trim();
  } else if (userAgent.includes("Safari")) {
    browserName = "Safari";
    browserVersion = userAgent.split("Version")[1].split(" ")[0].trim();
  }

  var fullBrowserName = browserName + " " + browserVersion;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).send("Internal Server Error");
    }
    var name = fields.name[0];
    var email = fields.email[0];
    var phone = fields.phone[0];
    var apply = fields.apply[0];
    let error = {};

    // validation
    if (!files.file || !name || !email || !phone || !apply) {
      if (!files.file) {
        error.file = "file required";
      } else {
        let fileget = files.file[0].mimetype;
        var filetypes = /pdf|jpeg|jpg|png|docx|doc/;
        var mimetype = filetypes.test(fileget);
        if (mimetype === false) {
          error.filetype = "file type must be pdf , jpeg , jpg ,png , docx ";
        }
      }
      if (!name) {
        error.name = "name require";
      }
      if (!email) {
        error.email = "email require";
      }
      if (!phone) {
        error.phone = "phone no. require";
      }
      if (!apply) {
        error.apply = "apply language required";
      }
      return res.status(402).json(errormessage(error));
    } else {
      const candidateName = name;
      const templatePath = path.join(__dirname, "../mail-responce", "HR_Mail.html");
      var html = await ejs.renderFile(templatePath, {candidateName});

      let final_filename = `${Date.now()}-${fields.name[0]}-${files.file[0].originalFilename}`;
      const oldPath = files.file[0].filepath;
      const newPath = path.join(__dirname, "../files/careerInquiry", final_filename);
      console.log(newPath)
      career
        .create({
          name: name,
          email: email,
          contact: phone,
          apply_for: apply,
          resume: final_filename,
          ip: userid,
          browsernm_browsever: fullBrowserName,
          mobile: isMobile,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
      fs.rename(oldPath, newPath, (error) => {
        if (error) {
          console.log("file name", error);
        } else {
          console.log("done");
        }
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
            filename: final_filename,
            path: newPath,
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

      transporter.sendMail(mailOptionsUser, (error, info) => {
        if (error) {
          return res.status(402).send('user mail',error);
        } else {
          // return res.status(200).send("email send successfully");
        }
      });
    }
  });
      
} catch (error) {
    console.log('error',error)
}
});
module.exports = router;
