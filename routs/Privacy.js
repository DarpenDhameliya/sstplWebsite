const express = require("express");
const router = express.Router();
const {errormessage, successmessage} = require("../response/Response");
const Authenticate = require("../Middleware/Authenticate");
const Privacy = require("../Model/Privacy");

router.get("/privacy_list", (req, res) => {
  try {
    Privacy.find({}, {__v: 0})
      .then((result) => {
        return res.status(200).send(successmessage(result));
      })
      .catch((error) => {
        return res.status(500).send(errormessage(error));
      });
  } catch (error) {
    return res.status(500).send(errormessage(error));
  }
});
router.get("/privacy_list_server",Authenticate, (req, res) => {
  try {
    Privacy.find({}, {__v: 0})
      .then((result) => {
        return res.status(200).send(successmessage(result));
      })
      .catch((error) => {
        return res.status(500).send(errormessage(error));
      });
  } catch (error) {
    return res.status(500).send(errormessage(error));
  }
});
router.post("/privacy_add", Authenticate, (req, res) => {
  try {
    let {privacycontent} = req.body;
    let error = [];

    if (!privacycontent) {
      error.push("Required");

      return res.status(402).send(errormessage(error));
    } else {
      Privacy.create({
        privacycontent,
      })
        .then((result) => {
          return res.status(200).send(successmessage(["Add Successfully"]));
        })
        .catch((error) => {
          return res.status(402).send(errormessage(error));
        });
    }
  } catch (error) {
    return res.status(500).send(errormessage(error));
  }
});

router.put("/privacy_update/:id", Authenticate, async (req, res) => {
  try {
    let {privacycontent} = req.body;
    let id = req.params.id;
    let error = [];
    if (!privacycontent) {
      error.push("Required");

      return res.status(402).send(errormessage(error));
    } else {
      let new_data = {};
      if (privacycontent) {
        new_data.privacycontent = privacycontent;
      }

      Privacy.findByIdAndUpdate(id, {$set: new_data}, {new: true})
        .then((result) => {
          return res.status(200).send(successmessage(result));
        })
        .catch((err) => {
          return res.status(402).send(errormessage(error));
        });
    }
  } catch (error) {
    return res.status(500).send(errormessage(error));
  }
});

module.exports = router;
