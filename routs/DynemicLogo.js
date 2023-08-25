const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { errormessage, successmessage, successmessageValidate } = require("../response/Response");
const Logo = require("../Model/DynemicLogo");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Authenticate = require("../Middleware/Authenticate");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files/festivallogo");
  },

  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

var upload = multer({
  storage: storage,
}).single("file");

router.post("/logo_list", async (req, res) => {
  try {
    let senddata = [];
    const ID = process.env.BASEURL;
    let { page_size, pageNumber } = req.body;
    const skip = (pageNumber - 1) * page_size;
    const totalRecords = await Logo.countDocuments({});
    const totalPages = Math.ceil(totalRecords / page_size);

    Logo.find({}, { __v: 0 })
      .skip(skip)
      .sort({ date: -1 })
      .limit(page_size)
      .then((data) => {
        data.map((result) => {
          let url = `${ID}/festivallogo/${result.logoimage}`;
          let single = {};
          single["_id"] = result._id;
          single["date"] = result.festivaldate;
          single["image"] = url;
          senddata.push({ ...single });
        });
        return res.status(200).send(successmessageValidate(senddata, totalPages));
      })
      .catch((error) => {
        return res.status(500).json(errormessage(error));
      });
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});

router.post("/logo_add", Authenticate, upload, async (req, res) => {
  try {
    let { date } = req.body;
    if (!date) {
        return res.status(402).json(errormessage("Date Required"));
    } else {
      Logo.create({
        festivaldate: date,
        logoimage: req.file.filename,
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

router.post("/logo_update/:id", upload, Authenticate, async (req, res) => {
  try {
    let { date, file } = req.body;
    let id = req.params.id;
    let error = [];

    if (!date) {
      return res.status(402).json(errormessage("Date Required"));
    } else {
      var find_party = await Logo.findById(id);
      let new_data = {};

      if (date) {
        new_data.festivaldate = date;
      }
      if (file) {
        new_data.logoimage = find_party.logoimage;
      } else {
        new_data.logoimage = req.file.filename;
        let fileName = find_party.logoimage;
        var filepath = "files/festivallogo";
        let filemainPath = path.join(filepath, fileName);
        fs.unlink(filemainPath, (err) => {
          if (err) {
            //  console.error("Error deleting file:", err);
            return;
          }
        });
      }
        Logo.findByIdAndUpdate(id, { $set: new_data }, { new: true })
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

router.delete("/logo_delete/:id", Authenticate, async (req, res) => {
  try {
    var id = req.params.id;
    if (!id) {
      return res.status(402).json(errormessage("Required"));
    } else {
      let data = await Logo.findById(id);
      fileName = data.logoimage;
      var filepath = "files/festivallogo";
      let filemainPath = path.join(filepath, fileName);
      fs.unlink(filemainPath, (err) => {
        if (err) {
          //  console.error("Error deleting file:", err);
          return;
        } else {
          Logo.findByIdAndDelete(id)
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
