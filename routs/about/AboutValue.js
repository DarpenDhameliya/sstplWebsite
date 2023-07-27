const express = require("express");
const router = express.Router();
const {errormessage, successmessage} = require("../../response/Response");
const Authenticate = require("../../Middleware/Authenticate");
const aboutValue = require("../../Model/AboutCoreValue");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files/about");
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
var upload = multer({
  storage: storage,
}).single("file");

router.get("/aboutvalue_list", (req, res) => {
  try {
    let senddata = [];
    const ID = process.env.BASEURL;

    aboutValue
      .find({}, {__v: 0})
      .then((data) => {
        data.map((result) => {
          let url = `${ID}/about/${result.file}`;
          let single = {};
          single["_id"] = result._id;
          single["heading"] = result.heading;
          single["content"] = result.content;
          single["file"] = url;

          senddata.push({...single});
        });
        return res.status(200).send(successmessage(senddata));
      })
      .catch((error) => {
        return res.status(500).send(errormessage(error));
      });
  } catch (error) {
    return res.status(500).send(errormessage(error));
  }
});

router.post("/aboutvalue_add", upload, Authenticate, (req, res) => {
  try {
    let {heading, value} = req.body;

    let error = [];

    if (!heading || !value || !req.file) {
      if (!heading) {
        error.push("Required");
      }
      if (!content) {
        error.push("Required");
      }
      if (!req.file) {
        error.push("Required");
      }

      return res.status(402).send(errormessage(error));
    } else {
      aboutValue
        .create({
          file: req.file.filename,
          heading,
          content: value,
        })
        .then((result) => {
          return res.status(200).send(successmessage(["Add Successfully"]));
        })
        .catch((error) => {
          return res.status(500).send(errormessage(error));
        });
    }
  } catch (error) {
    return res.status(500).send(errormessage(error));
  }
});

router.get("/aboutvalue_update_detail/:id", Authenticate, async (req, res) => {
  try {
    let id = req.params.id;
    let senddata = [];
    const ID = process.env.BASEURL;

    aboutValue
      .findById(id, {__v: 0})
      .then((result) => {
        let url = `${ID}/about/${result.file}`;
        let single = {};
        single["_id"] = result._id;
        single["heading"] = result.heading;
        single["content"] = result.content;
        single["file"] = url;
        senddata.push({...single});
        return res.status(200).send(successmessage(senddata));
      })
      .catch((error) => {
        return res.status(500).send(errormessage(error));
      });
  } catch (error) {
    return res.status(500).send(errormessage(error));
  }
});

router.put("/aboutvalue_update/:id", upload, Authenticate, async (req, res) => {
  try {
    let {heading, value, file} = req.body;
    let id = req.params.id;
    let error = [];
    if (!heading || !value) {
      if (!heading) {
        error.push("Required");
      }
      if (!value) {
        error.push("Required");
      }

      return res.status(402).send(errormessage(error));
    } else {
      var find_party = await aboutValue.findById(id);

      let new_data = {};
      if (heading) {
        new_data.heading = heading;
      }
      if (value) {
        new_data.content = value;
      }
      if (file) {
        const keyword = "about";
        const startIndex = file.indexOf(keyword) + keyword.length + 1;
        var modifiedUrl = file.substring(startIndex);
        new_data.file = modifiedUrl;
      } else {
        new_data.file = req.file.filename;
        let fileName = find_party.file;
        let filepath = "files/about";
        let filemainPath = path.join(filepath, fileName);
        fs.unlink(filemainPath, (err) => {
          if (err) {
            console.log('Error deleting file:', err);
          } else {
            console.log('File deleted successfully.');
          }
        });
      }
      aboutValue
        .findByIdAndUpdate(id, {$set: new_data}, {new: true})
        .then((result) => {
          return res.status(200).send(successmessage(result));
        })
        .catch((err) => {
          return res.status(402).send(errormessage(error));
        });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).send(errormessage(error));
  }
});

router.delete("/aboutvalue_delete/:id", Authenticate, async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.status(402).send(errormessage("Required"));
    } else {
      let data = await aboutValue.findById(id);
      fileName = data.file;
      var filepath = "files/about";
      let filemainPath = path.join(filepath, fileName);
      fs.unlink(filemainPath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
          return;
        } else {
          aboutValue
            .findByIdAndDelete(id)
            .then((result) => {
              return res.status(200).send(successmessage("Delete Successfully"));
            })
            .catch((err) => {
              return res.status(402).send(errormessage(err));
            });
        }
      });
    }
  } catch (error) {
    return res.status(500).send(errormessage(error));
  }
});

module.exports = router;
