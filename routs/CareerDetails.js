const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const careerdetails = require("../Model/CareerDetails");
const {errormessage, successmessage} = require("../response/Response");
const Authenticate = require("../Middleware/Authenticate");

router.get("/careerdetails_list", async (req, res) => {
  careerdetails
    .find({}, {__v: 0})
    .then((result) => {
      return res.status(200).json(successmessage(result));
    })
    .catch((error) => {
      return res.status(500).send(errormessage(error));
    });
});

router.post("/careerdetails_add", Authenticate, async (req, res) => {
  let {title, location, experience, position, description, responsibility, qualification, contentview, contentpositionview} = req.body;

  let error = [];
  if (!location || !title || !description || !experience || !qualification  || !contentpositionview || !position || !responsibility) {
    if (!location) {
      error.push("Required");
    }
    if (!title) {
      error.push("Required");
    }
    if (!description) {
      error.push("Required");
    }
    if (!experience) {
      error.push("Required");
    }
    if (!responsibility) {
      error.push("Required");
    }
    if (!qualification) {
      error.push("Required");
    }
    if (!contentpositionview) {
      error.push("Required");
    }
    if (!position) {
      error.push("Required");
    }
    return res.status(402).send(errormessage(error));
  } else {
    careerdetails
      .create({
        title,
        location,
        description,
        experience,
        responsibility,
        qualification,
        contentview,
        contentpositionview,
        position,
      })
      .then((result) => {
        return res.status(200).send(successmessage(["Add Successfully"]));
      })
      .catch((error) => {
        return res.status(500).send(errormessage(error));
      });
  }
});

router.get("/careerdetails_update_detail/:id", Authenticate, async (req, res) => {
  let id = req.params.id;
  careerdetails
    .findById(id, {__v: 0})
    .then((result) => {
      return res.status(200).send(successmessage(result));
    })
    .catch((error) => {
      return res.status(500).send(errormessage(error));
    });
});

router.put("/careerdetails_update/:id", async (req, res) => {
  let {title, location, experience, position, description, responsibility, qualification, contentview, contentpositionview} = req.body;
  let id = req.params.id;
  var jsondata;
  if (typeof req.body.responsibility === "string") {
    jsondata = JSON.parse(responsibility);
  }
  let error = [];
  if (!location || !title || !description || !experience || !qualification  || !contentpositionview || !position || !responsibility) {
    if (!location) {
      error.push("Required ");
    }
    if (!title) {
      error.push("Required ");
    }
    if (!description) {
      error.push("Required ");
    }
    if (!experience) {
      error.push("Required ");
    }
    if (!responsibility) {
      error.push("Required");
    }
    if (!qualification) {
      error.push("Required  ");
    }
   
    if (!contentpositionview) {
      error.push("Required ");
    }
    if (!position) {
      error.push("Required ");
    }
    return res.status(402).send(errormessage(error));
  } else {
    let find_party = await careerdetails.findById(id);
    let new_data = {};
    if (title) {
      new_data.title = title;
    }
    if (location) {
      new_data.location = location;
    }
    if (description) {
      new_data.description = description;
    }
    if (position) {
      new_data.position = position;
    }
    if (experience) {
      new_data.experience = experience;
    }
    if (jsondata) {
      new_data.responsibility = jsondata;
    }
    if (qualification) {
      new_data.qualification = qualification;
    }
    if (contentview) {
      new_data.contentview = contentview;
    }
    if (contentpositionview) {
      new_data.contentpositionview = contentpositionview;
    }
    careerdetails
      .findByIdAndUpdate(id, {$set: new_data}, {new: true})
      .then((result) => {
        return res.status(200).send(successmessage(result));
      })
      .catch((err) => {
        return res.status(402).send(errormessage(error));
      });
  }
});

router.delete("/careerdetails_delete/:id", Authenticate, async (req, res) => {
  let id = req.params.id;
  if (!id) {
    return res.status(402).send(errormessage("Required"));
  } else {
    careerdetails
      .findByIdAndDelete(id)
      .then((result) => {
        return res.status(200).send(successmessage("Delete Successfully"));
      })
      .catch((err) => {
        return res.status(402).send(errormessage(err));
      });
  }
});
module.exports = router;
