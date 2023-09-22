const express = require("express");
const router = express.Router();
const {errormessage, successmessage} = require("../response/Response");
const Authenticate = require("../Middleware/Authenticate");
const Return = require("../Model/Privacy");

router.get("/return_list", (req, res) => {
  try {
    Return.find({}, {__v: 0})
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
router.get("/return_list_server",Authenticate, (req, res) => {
  try {
    Return.find({}, {__v: 0})
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
router.post("/return_add", Authenticate, async (req, res) => {
  try {
    let {returnpolicycontent} = req.body;
    let error = [];
    if (!returnpolicycontent) {
      error.push("Required");

      return res.status(402).send(errormessage(error));
    } else {
      const newReturnPolicy = new Return({returnpolicycontent});
      newReturnPolicy.save().then((result) => {
        return res.status(200).send(successmessage(["Add Successfully"]));
      }).catch((err) => {
        return res.status(402).send(errormessage(err));
      })
    }
  } catch (error) {
    return res.status(500).send(errormessage(error));
  }
});

router.put("/return_update/:id", Authenticate, async (req, res) => {
  try {
    let {returnpolicycontent} = req.body;
    let id = req.params.id;
    let error = [];
    if (!returnpolicycontent) {
      error.push("Required");

      return res.status(402).send(errormessage(error));
    } else {
      let new_data = {};
      if (returnpolicycontent) {
        new_data.returnpolicycontent = returnpolicycontent;
      }

      Return.findByIdAndUpdate(id, {$set: new_data}, {new: true})
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
