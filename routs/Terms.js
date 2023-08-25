const express = require("express");
const router = express.Router();
const {errormessage, successmessage} = require("../response/Response");
const Authenticate = require("../Middleware/Authenticate");
const Terms = require("../Model/Privacy");

router.get("/terms_list", (req, res) => {
  try {
    Terms.find({}, {__v: 0})
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
router.post("/terms_add", Authenticate, (req, res) => {
  try {
    let {termscontent} = req.body;
    let error = [];
    if (!termscontent) {
      error.push("Required");

      return res.status(402).send(errormessage(error));
    } else {
      const newReturnPolicy = new Return({termscontent});
      newReturnPolicy
        .save()
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

router.put("/terms_update/:id", Authenticate, async (req, res) => {
  try {
    let {termscontent} = req.body;
    let id = req.params.id;
    let error = [];
    if (!termscontent) {
      error.push("Required");

      return res.status(402).send(errormessage(error));
    } else {
      let new_data = {};
      if (termscontent) {
        new_data.termscontent = termscontent;
      }

      Terms.findByIdAndUpdate(id, {$set: new_data}, {new: true})
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
