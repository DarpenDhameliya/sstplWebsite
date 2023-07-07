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
  service
    .find({}, {__v: 0})
    .then((data) => {
      data.map((result) => {
        let urlfront = `http://192.168.0.235:5000/service/${result.frontpageimg}`;
        let urlservice = `http://192.168.0.235:5000/service/${result.servicepageimg}`;
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
      return res.status(500).send(errormessage(error));
    });
});
router.post("/service_add", upload.array("image", 2), Authenticate, (req, res) => {
  let {heading, content} = req.body;

  let error = [];

  if (!heading || !content) {
    if (!heading) {
      error.push("Required");
    }
    if (!content) {
      error.push("Required");
    }

    return res.status(402).send(errormessage(error));
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
        return res.status(500).send(errormessage(error));
      });
  }
});

router.get("/service_update_detail/:id", Authenticate, async (req, res) => {
  let id = req.params.id;
  let senddata = [];
  service
    .findById(id, {__v: 0})
    .then((result) => {
      let urlfront = `http://192.168.0.235:5000/service/${result.frontpageimg}`;
      let urlservice = `http://192.168.0.235:5000/service/${result.servicepageimg}`;
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
      return res.status(500).send(errormessage(error));
    });
});

router.put("/service_update/:id", upload.array("image", 2), Authenticate, async (req, res) => {
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

    return res.status(402).send(errormessage(error));
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
        return res.status(402).send(errormessage(error));
      });
  }
});

router.delete("/service_delete/:id", Authenticate, async (req, res) => {
  let id = req.params.id;
  if (!id) {
    return res.status(402).send(errormessage("Required"));
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
            return res.status(402).send(errormessage(err));
          });
      }
    });
  }
});

module.exports = router;
