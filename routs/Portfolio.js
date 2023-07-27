const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const {errormessage, successmessage , successmessageValidate} = require("../response/Response");
const portfolio = require("../Model/Portfolio");
const portfoliocategorylist = require("../Model/PortfolioCategoryList");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Authenticate = require("../Middleware/Authenticate");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files/portfolio");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const maxSize = 1 * 1000 * 1000;
var upload = multer({
  storage: storage,
}).single("uploadimg");

router.get("/portfoliocategory_list", async (req, res) => {
  let value = portfoliocategorylist.schema.paths.category.defaultValue
  const defaultValues = value();
  console.log(defaultValues)
});

router.post("/portfolio_list", async (req, res) => {
  try {
    let senddata = [];
    const ID = process.env.BASEURL;
    let {page_size, pageNumber} = req.body;
    const skip = (pageNumber - 1) * page_size;
    const totalRecords = await portfolio.countDocuments({});
    const totalPages = Math.ceil(totalRecords / page_size);

    portfolio
      .find({}, {__v: 0})
      .skip(skip)
      .sort({ date: -1 })
      .limit(page_size) // per page_size
      .then((data) => {
        data.map((result) => {
          let url = `${ID}/portfolio/${result.uploadimg}`;
          let single = {};
          single["_id"] = result._id;
          single["category"] = result.category;
          single["contentpositionview"] = result.contentpositionview;
          single["contentview"] = result.contentview;
          single["country"] = result.country;
          single["duration"] = result.duration;
          single["industry"] = result.industry;
          single["name"] = result.name;
          single["team"] = result.team;
          single["technology"] = result.technology;
          single["uploadimg"] = url;
          senddata.push({...single});
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

router.post("/portfolio_add", Authenticate, upload, async (req, res) => {
  try {
    let {name, industry, team, duration, country, uploadimg, contentview, category, contentpositionview, technology} = req.body;
    let error = [];
    if (!name || !industry || !team || !duration || !country || !technology || !category || !req.file || !contentview || !contentpositionview) {
      if (!name) {
        error.push("Required1");
      }
      if (!industry) {
        error.push("Required2");
      }
      if (!team) {
        error.push("Required3");
      }
      if (!duration) {
        error.push("Required4");
      }
      if (!country) {
        error.push("Required5");
      }
      if (!technology) {
        error.push("Required6");
      }
      if (!contentview) {
        error.push("Required7");
      }
      if (!contentpositionview) {
        error.push("Required8");
      }
      if (!category) {
        error.push("Required9");
      }
      if (!req.file) {
        error.push("Required10");
      }
      return res.status(402).json(errormessage(error));
    } else {
      portfolio
        .create({
          name,
          industry,
          team,
          duration,
          country,
          technology,
          category,
          contentview,
          contentpositionview,
          uploadimg: req.file.filename,
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

router.get("/portfolio_update_detail/:id", Authenticate, async (req, res) => {
  try {
    let id = req.params.id;
    let senddata = [];
    const ID = process.env.BASEURL;

    portfolio
      .findById(id, {__v: 0})
      .then((result) => {
        // data.map((result) => {
        let url = `${ID}/portfolio/${result.uploadimg}`;
        let single = {};
        single["_id"] = result._id;
        single["category"] = result.category;
        single["contentpositionview"] = result.contentpositionview;
        single["contentview"] = result.contentview;
        single["country"] = result.country;
        single["duration"] = result.duration;
        single["industry"] = result.industry;
        single["name"] = result.name;
        single["team"] = result.team;
        single["technology"] = result.technology;
        single["uploadimg"] = url;
        senddata.push({...single});
        return res.status(200).send(successmessage(single));
        // });
      })
      .catch((error) => {
        return res.status(500).json(errormessage(error));
      });
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});

router.post("/portfolio_update/:id", upload, Authenticate, async (req, res) => {
  try {
    let {name, industry, team, duration, country, uploadimg, contentview, category, contentpositionview, technology} = req.body;
    let id = req.params.id;
    let error = [];
    if (!name || !industry || !team || !duration || !country || !technology || !category || !contentview || !contentpositionview) {
      if (!name) {
        error.push("Required1");
      }
      if (!industry) {
        error.push("Required2");
      }
      if (!team) {
        error.push("Required3");
      }
      if (!duration) {
        error.push("Required4");
      }
      if (!country) {
        error.push("Required5");
      }
      if (!technology) {
        error.push("Required6");
      }
      if (!contentview) {
        error.push("Required7");
      }
      if (!contentpositionview) {
        error.push("Required8");
      }
      if (!category) {
        error.push("Required9");
      }

      return res.status(402).json(errormessage(error));
    } else {
      var find_party = await portfolio.findById(id);
      let new_data = {};
      if (name) {
        new_data.name = name;
      }
      if (industry) {
        new_data.industry = industry;
      }
      if (team) {
        new_data.team = team;
      }
      if (duration) {
        new_data.duration = duration;
      }
      if (country) {
        new_data.country = country;
      }
      if (technology) {
        new_data.technology = technology;
      }
      if (category) {
        new_data.category = category;
      }
      if (contentview) {
        new_data.contentview = contentview;
      }
      if (contentpositionview) {
        new_data.contentpositionview = contentpositionview;
      }
      if (uploadimg) {
        const keyword = "portfolio";
        const startIndex = uploadimg.indexOf(keyword) + keyword.length + 1;
        var modifiedUrl = uploadimg.substring(startIndex);
        new_data.uploadimg = modifiedUrl;
      } else {
        new_data.uploadimg = req.file.filename;
        let fileName = find_party.uploadimg;
        var filepath = "files/portfolio";
        let filemainPath = path.join(filepath, fileName);
        fs.unlink(filemainPath, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
            return;
          }
        });
      }

      portfolio
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

router.delete("/portfolio_delete/:id", Authenticate, async (req, res) => {
  try {
    var id = req.params.id;
    if (!id) {
      return res.status(402).json(errormessage("Required"));
    } else {
      let data = await portfolio.findById(id);
      fileName = data.uploadimg;
      var filepath = "files/portfolio";
      let filemainPath = path.join(filepath, fileName);
      fs.unlink(filemainPath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
          return;
        } else {
          portfolio
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
