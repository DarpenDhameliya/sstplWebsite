const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require("../Model/User");
const {errormessage, successmessage} = require("../response/Response");
const Authenticate = require("../Middleware/Authenticate");
const bcrypt = require("bcrypt");

router.post("/forgetpass", Authenticate, async (req, res) => {
  let {current_password, new_password} = req.body;
  console.log(req.body);
  console.log(req.user);

  // User.find({email: req.user})
  //   .then((result) => {
  //     result.map((item) => {
  //       console.log(item.password);
  //       bcrypt
  //         .compare(current_password, item.password)
  //         .then((response) => {
  //           console.log(response);
  //           const salt = await bcrypt.genSalt(10);
  //   const encyptpassword = await bcrypt.hash(password, salt);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  let finduser = await User.find({email: req.user});
  if (finduser.length > 0) {
    console.log(finduser[0].password);

    let comparepass = await bcrypt.compare(current_password, finduser[0].password);
    console.log(comparepass)

    if(comparepass === true){
      const salt = await bcrypt.genSalt(10);
      const encyptpassword = await bcrypt.hash(new_password, salt);
      console.log(encyptpassword);
      User.updateOne(
        {_id: finduser[0]._id},
        {
          $set: {password: encyptpassword},
        }
      ).then((result) => {
        return res.status(200).json(successmessage("Password Changed"));
      }).catch((err) => {
        return res.status(402).json(errormessage(err));
      })
    }else {
      return res.status(402).json(errormessage("Password Mismatch"));
    }
  } else {
    return res.status(402).json(errormessage("user not found"));
  }
});

module.exports = router;
