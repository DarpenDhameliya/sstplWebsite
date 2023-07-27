const express = require("express");
const router = express.Router();
const {errormessage, successmessage} = require("../response/Response");
const Authenticate = require("../Middleware/Authenticate");
const service = require("../Model/Service");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files/service");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
var upload = multer({
  storage: storage,
});

router.get("/service_list", (req, res) => {
  let senddata = [];
  const ID = process.env.BASEURL;

  service
    .find({}, {__v: 0})
    .then((data) => {
      data.map((result) => {
        let urlfront = `${ID}/service/${result.frontpageimg}`;
        let urlservice = `${ID}/service/${result.servicepageimg}`;
        let single = {};
        single["_id"] = result._id;
        single["heading"] = result.heading;
        single["content"] = result.content;
        single["frontpageimg"] = urlfront;
        single["servicepageimg"] = urlservice;

        senddata.push({...single});
      });
      return res.status(200).send(successmessage(senddata));
    })
    .catch((error) => {
      console.log(error)
      return res.status(500).json(errormessage(error));
    });
});
router.post("/service_add", upload.array("image", 2), Authenticate, (req, res) => {
  try {
    let {heading, content} = req.body;

    let error = [];

    if (!heading || !content) {
      if (!heading) {
        error.push("Required");
      }
      if (!content) {
        error.push("Required");
      }

      return res.status(402).json(errormessage(error));
    } else {
      service
        .create({
          frontpageimg: req.files[0].filename,
          servicepageimg: req.files[1].filename,
          heading,
          content,
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
});

router.get("/service_update_detail/:id", Authenticate, async (req, res) => {
  let id = req.params.id;
  let senddata = [];
  const ID = process.env.BASEURL;

  service
    .findById(id, {__v: 0})
    .then((result) => {
      let urlfront = `${ID}/service/${result.frontpageimg}`;
      let urlservice = `${ID}/service/${result.servicepageimg}`;
      let single = {};
      single["_id"] = result._id;
      single["heading"] = result.heading;
      single["content"] = result.content;
      single["frontpageimg"] = urlfront;
      single["servicepageimg"] = urlservice;

      senddata.push({...single});
      return res.status(200).send(successmessage(senddata));
    })
    .catch((error) => {
      return res.status(500).json(errormessage(error));
    });
});

router.put("/service_update/:id", upload.array("image", 2), Authenticate, async (req, res) => {
  try {
    let {heading, content} = req.body;
    var newfile = req.files;

    let id = req.params.id;
    let error = [];
    if (!heading || !content) {
      if (!heading) {
        error.push("Required");
      }
      if (!content) {
        error.push("Required");
      }

      return res.status(402).json(errormessage(error));
    } else {
      var new_data = {};

      var find_party = await service.findById(id);

      var keyword = "service";
      var sameid;
      var singlefileUpload;

      if (typeof req.body.image === "string") {
        // (' 2 mathi ek image ma chnage thai')
        var startIndex = req.body.image.indexOf(keyword) + keyword.length + 1;
        singlefileUpload = req.body.image.substring(startIndex);

        if (find_party.frontpageimg === singlefileUpload) {
          new_data.frontpageimg = singlefileUpload;
        } else {
          new_data.frontpageimg = newfile[0].filename;
          let filepath = "files/service";
          let fileName = find_party.frontpageimg;
          let filemainPath = path.join(filepath, fileName);
          fs.unlink(filemainPath);
        }
        if (find_party.servicepageimg === singlefileUpload) {
          new_data.servicepageimg = singlefileUpload;
        } else {
          new_data.servicepageimg = newfile[0].filename;
          let filepath = "files/service";
          let fileName = find_party.servicepageimg;
          let filemainPath = path.join(filepath, fileName);
          fs.unlink(filemainPath);
        }
      } else if (typeof req.body.image === "object") {
        // (' both image not change , send as it is')
        if (req.body.image[0]) {
          const startIndex = req.body.image[0].indexOf(keyword) + keyword.length + 1;
          var modifiedUrl = req.body.image[0].substring(startIndex);
          new_data.frontpageimg = modifiedUrl;
        }
        if (req.body.image[1]) {
          const startIndex = req.body.image[1].indexOf(keyword) + keyword.length + 1;
          var modifiedUrl = req.body.image[1].substring(startIndex);
          new_data.servicepageimg = modifiedUrl;
        }
      } else {
        // ('both image ma chnage thai')
        new_data.frontpageimg = req.files[0].filename;
        new_data.servicepageimg = req.files[1].filename;
        let fileName = find_party.frontpageimg;
        let fileName1 = find_party.servicepageimg;
        var filepath = "files/service";
        let filemainPath = path.join(filepath, fileName);
        let filemainPath1 = path.join(filepath, fileName1);
        fs.unlink(filemainPath);
        fs.unlink(filemainPath1);
      }

      if (heading) {
        new_data.heading = heading;
      }
      if (content) {
        new_data.content = content;
      }

      service
        .findByIdAndUpdate(id, {$set: new_data}, {new: true})
        .then((result) => {
          return res.status(200).send(successmessage(result));
        })
        .catch((err) => {
          return res.status(402).json(errormessage(error));
        });
    }
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});

router.delete("/service_delete/:id", Authenticate, async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.status(402).json(errormessage("Required"));
    } else {
      let data = await service.findById(id);
      let fileName = data.frontpageimg;
      let fileName1 = data.servicepageimg;
      var filepath = "files/service";
      let filemainPath = path.join(filepath, fileName);
      let filemainPath1 = path.join(filepath, fileName1);
      fs.unlink(filemainPath1, (err) => {
        if (err) {
          return;
        }
      });
      fs.unlink(filemainPath, (err) => {
        if (err) {
          return;
        } else {
          service
            .findByIdAndDelete(id)
            .then((result) => {
              return res.status(200).send(successmessage("Delete Successfully"));
            })
            .catch((err) => {
              return res.status(402).json(errormessage(err));
            });
        }
      });
    }
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});

module.exports = router;




// const express = require("express");
// const router = express.Router();
// const nodemailer = require("nodemailer");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
// const career = require("../Model/Career");
// const {errormessage, successmessage, successmessageValidate} = require("../response/Response");
// const Authenticate = require("../Middleware/Authenticate");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files/careerInquiry");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${req.body.name}-${file.originalname}`);
//   },
// });
// const maxSize = 1 * 1000 * 1000;
// var upload = multer({
//   storage: storage,
//   limits: {fileSize: maxSize},
//   fileFilter: function (req, file, cb) {
//     var filetypes = /pdf|jpeg|jpg|png/;
//     var mimetype = filetypes.test(file.mimetype);
//     var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     let docextension = path.extname(file.originalname).toLowerCase();
//     if ((mimetype && extname) || docextension == ".docx" || docextension == ".doc") {
//       return cb(null, true);
//     } else {
//       return cb(null, false);
//     }
//   },
// }).single("file");

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

//     let filePath = "./mail-responce/HR_Mail.html";
//     var data = fs.readFileSync(filePath, "utf8");
//     const updatedContent = data.replace("Hey Candidate Name", `hey ${name}`);
//     fs.writeFileSync(filePath, updatedContent, "utf8");
//     var html = fs.readFileSync(filePath, "utf8");
//     if (!req.file || !req.body.name || !req.body.email || !req.body.phone || !req.body.apply) {
//       if (!req.file) {
//         error.file = "file type must be pdf , jpeg , jpg ,png , docx ";
//       }
//       if (!req.body.name) {
//         error.name = "name require";
//       }
//       if (!req.body.email) {
//         error.email = "email require";
//       }
//       if (!req.body.phone) {
//         error.phone = "phone no. require";
//       }
//       if (!req.body.apply) {
//         error.apply = "apply language required";
//       }
//       return res.status(402).json(error);
//     } else {
//       // return res.status(200).send(successmessage('done'))

//       const mail = new career({
//         name: name,
//         email: email,
//         contact: phone,
//         apply_for: apply,
//         resume: req.file.filename,
//         ip: userid,
//         browsernm_browsever: fullBrowserName,
//         mobile: isMobile,
//       });
//       console.log(mail)
//       mail.save()
//   .then(savedPerson => {
//     console.log('Person saved successfully:', savedPerson);
//     return res.status(200).send(successmessage('email send successfully'))
//   })
//   .catch(error => {
//     console.error(error);
//   });
//       // career.create({
//       //   name: name,
//       //   email: email,
//       //   contact: phone,
//       //   apply_for: apply,
//       //   resume: req.file.filename,
//       //   ip: userid,
//       //   browsernm_browsever: fullBrowserName,
//       //   mobile: isMobile,
//       // }).then((resu) => {
//       //   console.log('user add',resu)
//       //   return res.status(200).send(successmessage("email send successfully"))
//       // })

//       let data = {};
//       data.name = req.body.name;
//       data.email = req.body.email;
//       data.phone = req.body.phone;
//       data.applyfor = req.body.apply;

//       // if (req.file === undefined) {
//       //   return res.status(402).send("please add required files");
//       // } else {
//       //   let record = JSON.stringify(data);
//       //   filepath = req.file.path;
//       //   filename = req.file.filename;
//       //   let pathfile = path.join(__dirname, "../", filepath);

//       //   let transporter = nodemailer.createTransport({
//       //     service: "gmail",
//       //     auth: {
//       //       user: ID,
//       //       pass: PASS,
//       //     },
//       //   });

//       //   let mailOptions = {
//       //     to: ID,
//       //     // to:"darpen.sstpl@gmail.com",
//       //     subject: `${req.body.apply} - ${req.body.name}`,
//       //     text: record,
//       //     html: `<table>
//       //       <tr>
//       //       <th>name</th>
//       //       <td>${req.body.name}</td>
//       //       </tr>
//       //       <tr>
//       //        <th>email</th>
//       //        <td>${req.body.email}</td>
//       //       </tr>
//       //       <tr>
//       //         <th>phone</th>
//       //         <td>${req.body.phone}</td>
//       //       </tr>
//       //       <tr>
//       //         <th>Apply for</th>
//       //         <td>${req.body.apply}</td>
//       //       </tr>
//       //       </table>`,
//       //     attachments: [
//       //       {
//       //         filename: filename,
//       //         path: pathfile,
//       //       },
//       //     ],
//       //   };

//       //   transporter.sendMail(mailOptions, (error, info) => {
//       //     if (error) {
//       //       console.log('multer',error)
//       //       return res.status(402).json(error);
//       //     } else {
//       //       console.log(info)
//       //       // return res.status(200).send("email send successfully");
//       //     }
//       //   });
//       //   console.log('user ',req.body.email)
//       //   let mailOptionsUser = {
//       //     to: req.body.email,
//       //     subject: "Conformation of your inquiry",
//       //     // html: `<table>
//       //     //     <tr>
//       //     //     <th>First name</th>
//       //     //     <td>${req.body.name}</td>
//       //     //     </tr>
//       //     //     <tr>
//       //     //      <th>email</th>
//       //     //      <td>${req.body.email}</td>
//       //     //     </tr>
//       //     //     <tr>
//       //     //       <th>phone</th>
//       //     //       <td>${req.body.phone}</td>
//       //     //     </tr>
//       //     //     <tr>
//       //     //       <th>Technology</th>
//       //     //       <td>${req.body.apply}</td>
//       //     //     </tr>
//       //     //     </table>`,
//       //     html: html,
//       //   };
        
//       //   transporter.sendMail(mailOptionsUser);
//       // }
//       // return res.status(200).send(successmessage('done'))
//     }
//     // });
//   } catch (error) {
//     console.log(error)
//     return res.status(500).json(errormessage(error));
//   }
// });

// router.get("/career-list/:pageno/:rowperpage", Authenticate, async (req, res) => {
//   try {
//     const pageNumber = req.params.pageno
//     const page_size = req.params.rowperpage
//     // let {page_size, pageNumber} = req.body;
//     const ID = process.env.BASEURL;

//     const skip = (pageNumber - 1) * page_size;
//     const totalRecords = await career.countDocuments({});
//     const totalPages = Math.ceil(totalRecords / page_size);
//     let senddata = [];
//     career
//       .find({}, {__v: 0})
//       .sort({ date: -1 })
//       .skip(skip)
//       .limit(page_size) // per page_size
//       .then((data) => {
//         data.map((result) => {
//           let url = `${ID}/careerInquiry/${result.resume}`;
//           let single = {};
//           single["id"] = result._id;
//           single["name"] = result.name;
//           single["email"] = result.email;
//           single["contact"] = result.contact;
//           single["apply_for"] = result.apply_for;
//           single["resume"] = result.resume;
//           single["resumedownload"] = url;
//           senddata.push({...single});
//         });
//         return res.status(200).send(successmessageValidate(senddata, totalPages));
//       })
//       .catch((error) => {
//         return res.status(404).json(errormessage(error));
//       });
//   } catch (error) {
//     return res.status(500).json(errormessage(error));
//   }
// });

// router.delete("/career_delete/:id", Authenticate, (req, res) => {
//   try {
//     let id = req.params.id;

//     var filepath = "files/careerInquiry";
//     var fileName;
//     if (!id) {
//       return res.status(402).json(errormessage("Required"));
//     } else {
//       career.findById(id, {__v: 0}).then((data) => {
//         fileName = data.resume;
//         let filemainPath = path.join(filepath, fileName);
//         fs.unlink(filemainPath, (err) => {
//           if (err) {
//             console.error("Error deleting file:", err);
//             return;
//           } else {
//             career
//               .findByIdAndDelete(id)
//               .then((result) => {
//                 return res.status(200).send(successmessage("Delete Successfully"));
//               })
//               .catch((err) => {
//                 return res.status(402).json(errormessage(err));
//               });
//           }
//         });
//       });
//     }
//   } catch (error) {
//     return res.status(500).json(errormessage(error));
//   }
// });

// module.exports = router;
