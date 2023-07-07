const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const {errormessage, successmessage} = require("../response/Response");
const Testimonial = require("../Model/Testimonial");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Authenticate = require("../Middleware/Authenticate");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files/testimonial");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const maxSize = 1 * 1000 * 1000;
var upload = multer({
  storage: storage,
}).single("file");

router.get("/testimonial_list", async (req, res) => {
  let senddata = [];
  Testimonial.find({}, {__v: 0})
    .then((data) => {
      data.map((result) => {
        let url = `http://192.168.0.235:5000/testimonial/${result.image}`;
        let single = {};
        single["_id"] = result._id;
        single["name"] = result.name;
        single["position"] = result.position;
        single["discription"] = result.discription;
        single["contentview"] = result.contentview;
        single["contentpositionview"] = result.contentpositionview;
        single["viewimg"] = result.image;
        single["image"] = url;
        senddata.push({...single});
      });
      return res.status(200).send(successmessage(senddata));
    })
    .catch((error) => {
      return res.status(500).send(errormessage(error));
    });
});

router.post("/testimonial_add", Authenticate, upload, async (req, res) => {
  let {name, position, discription, contentpositionview, contentview} = req.body;
  let error = [];
  if (!name || !position || !discription || !contentpositionview || !contentview) {
    if (!name) {
      error.push("Name Required");
    }
    if (!position) {
      error.push("Position Required");
    }
    if (!discription) {
      error.push("Discription Required");
    }
    if (!contentpositionview) {
      error.push("view Position Required");
    }
    if (!contentview) {
      error.push("view Required");
    }

    return res.status(402).send(errormessage(error));
  } else {
    Testimonial.create({
      name,
      position,
      discription,
      contentpositionview,
      contentview,
      image: req.file.filename,
    })
      .then((result) => {
        return res.status(200).send(successmessage(["Add Successfully"]));
      })
      .catch((error) => {
        return res.status(500).send(errormessage(error));
      });
  }
});

router.get("/testimonial_update_detail/:id", Authenticate, async (req, res) => {
  let id = req.params.id;
  let senddata = [];
  Testimonial.findById(id, {__v: 0})
    .then((result) => {
      let url = `http://192.168.0.235:5000/testimonial/${result.image}`;
      let single = {};
      single["_id"] = result._id;
      single["name"] = result.category;
      single["position"] = result.position;
      single["discription"] = result.discription;
      single["contentview"] = result.contentview;
      single["contentpositionview"] = result.contentpositionview;
      single["viewimg"] = result.image;
      single["image"] = url;
      senddata.push({...single});
      return res.status(200).send(successmessage(single));
    })
    .catch((error) => {
      return res.status(500).send(errormessage(error));
    });
});

router.post("/testimonial_update/:id", upload, Authenticate, async (req, res) => {
  let {name, position, discription, contentpositionview, contentview, file} = req.body;
  let id = req.params.id;
  let error = [];
  if (!name || !position || !discription || !contentpositionview || !contentview) {
    if (!name) {
      error.push("Name Required");
    }
    if (!position) {
      error.push("Position Required");
    }
    if (!discription) {
      error.push("Discription Required");
    }
    if (!contentpositionview) {
      error.push("view Position Required");
    }
    if (!contentview) {
      error.push("view Required");
    }

    return res.status(402).send(errormessage(error));
  } else {
    var find_party = await Testimonial.findById(id);
    let new_data = {};
    if (name) {
      new_data.name = name;
    }
    if (position) {
      new_data.position = position;
    }
    if (discription) {
      new_data.discription = discription;
    }
    if (contentpositionview) {
      new_data.contentpositionview = contentpositionview;
    }
    if (contentview) {
      new_data.contentview = contentview;
    }
    if (file) {
      const keyword = "testimonial";
      const startIndex = file.indexOf(keyword) + keyword.length + 1;
      var modifiedUrl = file.substring(startIndex);
      new_data.image = modifiedUrl;
    } else {
      new_data.image = req.file.filename;
      let fileName = find_party.image;
      var filepath = "files/testimonial";
      let filemainPath = path.join(filepath, fileName);
      fs.unlink(filemainPath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
          return;
        }
      });
    }

    Testimonial.findByIdAndUpdate(id, {$set: new_data}, {new: true})
      .then((result) => {
        return res.status(200).send(successmessage(result));
      })
      .catch((err) => {
        return res.status(402).send(errormessage(error));
      });
  }
});

router.delete("/testimonial_delete/:id", Authenticate, async (req, res) => {
  var id = req.params.id;
  if (!id) {
    return res.status(402).send(errormessage("Required"));
  } else {
    let data = await Testimonial.findById(id);
    fileName = data.image;
    var filepath = "files/testimonial";
    let filemainPath = path.join(filepath, fileName);
    fs.unlink(filemainPath, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
        return;
      } else {
        Testimonial.findByIdAndDelete(id)
          .then((result) => {
            return res.status(200).send(successmessage("Delete Successfully"));
          })
          .catch((err) => {
            return res.status(402).send(errormessage(err));
          });
      }
    });
  }
});
module.exports = router;
