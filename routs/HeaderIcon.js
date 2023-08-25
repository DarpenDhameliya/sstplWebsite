const express = require("express");
const router = express.Router();
const icon = require("../Model/HeaderIcon");
const {errormessage, successmessage} = require("../response/Response");
const Authenticate = require("../Middleware/Authenticate");

router.get("/icon_list", async (req, res) => {
  icon
    .find({}, {__v: 0})
    .then((data) => {
      return res.status(200).json(successmessage(data));
    })
    .catch((error) => {
      return res.status(500).json(errormessage(error));
    });
});

router.post("/icon_add", Authenticate, async (req, res) => {
  try {
    if (req.body.length === 0) {
      return res.status(402).json(errormessage("Required !"));
    } else {
      icon
        .create({
          data: req.body,
        })
        .then((result) => {
          return res.status(200).send(successmessage(["Add Successfully"]));
        })
        .catch((error) => {
          return res.status(402).json(errormessage(error));
        });
    }
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});

// router.get("/careerdetails_update_detail/:id", Authenticate, async (req, res) => {
//   try {
//     let id = req.params.id;
//     careerdetails
//       .findById(id, {__v: 0})
//       .then((result) => {
//         return res.status(200).send(successmessage(result));
//       })
//       .catch((error) => {
//         return res.status(500).send(errormessage(error));
//       });
//   } catch (error) {
//     return res.status(500).send(errormessage(error));
//   }
// });

router.put("/icon_update/:id", Authenticate, async (req, res) => {
  try {
    let id = req.params.id;
    // if (typeof req.body.responsibility === "string") {
    //   jsondata = JSON.parse(responsibility);
    // }
    if (req.body.length === 0) {
      return res.status(402).json(errormessage("Required !"));
    } else {
      let new_data = {};
      new_data.data = req.body
      icon
        .findByIdAndUpdate(id, {$set:new_data}, {new: true})
        .then((result) => {
          return res.status(200).send(successmessage(result));
        })
        .catch((err) => {
          return res.status(402).json(errormessage(err));
        });
    }
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});

router.delete("/icon_delete/:id", Authenticate, async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.status(402).send(errormessage("Required"));
    } else {
      icon
        .findByIdAndDelete(id)
        .then((result) => {
          return res.status(200).send(successmessage("Delete Successfully"));
        })
        .catch((err) => {
          return res.status(402).json(errormessage(err));
        });
    }
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});
module.exports = router;
