const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require("../Model/User");
const {errormessage, successmessage} = require("../response/Response");
const Authenticate = require("../Middleware/Authenticate");
const bcrypt = require("bcrypt");

router.post("/forgetpass", Authenticate, async (req, res) => {
  try {
    let {current_password, new_password} = req.body;

    let finduser = await User.find({email: req.user});
    if (finduser.length > 0) {
      let comparepass = await bcrypt.compare(current_password, finduser[0].password);

      if (comparepass === true) {
        const salt = await bcrypt.genSalt(10);
        const encyptpassword = await bcrypt.hash(new_password, salt);
        User.updateOne(
          {_id: finduser[0]._id},
          {
            $set: {password: encyptpassword},
          }
        )
          .then((result) => {
            return res.status(200).json(successmessage("Password Changed"));
          })
          .catch((err) => {
            return res.status(402).json(errormessage(err));
          });
      } else {
        return res.status(402).json(errormessage("Password Mismatch"));
      }
    } else {
      return res.status(402).json(errormessage("user not found"));
    }
  } catch (error) {
    return res.status(500).json(errormessage(error));
  }
});

module.exports = router;
