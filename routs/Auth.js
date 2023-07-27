const express = require("express");
const router = express.Router();
const JWT_SECRET = "darpendHameliya";
const bcrypt = require("bcrypt");
const user = require("../Model/User");
const jwt = require("jsonwebtoken");
const {successmessage, errormessage} = require("../response/Response");

router.post("/signup", async (req, res) => {
  try {
    const {email, password} = req.body;

    const salt = await bcrypt.genSalt(10);
    const encyptpassword = await bcrypt.hash(password, salt);
    user
      .create({
        email,
        password: encyptpassword,
      })
      .then((result) => {
        return res.status(200).send("User Create Successfully");
      })
      .catch((error) => {
        if (error.name === "ValidationError") {
          const errorMessage = error.message.replace("user validation failed: ", "");
          return res.status(402).json(errormessage(errorMessage));
        } else if (error.code === 11000) {
          return res.status(402).json(errormessage("Select Another Email"));
        } else {
          return res.status(402).json(error);
        }
      });
  } catch (error) {
    return res.status(500).send(errormessage(error));
  }
});

router.post("/login", async (req, res) => {
  try {
    const {email, password} = req.body;
    let finduser = await user.findOne({email});
    let error = [];
    if (!email || !password || (!finduser && email)) {
      if (!email) {
        error.push("Email Require !");
      }
      if (!password) {
        error.push("Password Require !");
      }
      if (!finduser && email) {
        error.push("user not exist");
      }
      return res.status(402).send(errormessage(error));
    } else {
      // try {
      const passwordCompare = await bcrypt.compare(req.body.password, finduser.password);
      if (passwordCompare === true) {
        const data = {
          password: finduser.password,
          name: finduser.email,
        };

        const authToken = await jwt.sign(data, JWT_SECRET, {
          expiresIn: "24h",
        });
        await user.updateOne(
          {_id: finduser._id},
          {
            $set: {token: authToken},
          }
        );
        return res.status(200).send(successmessage(authToken));
      } else {
        return res.status(402).send(errormessage("password mismatch"));
      }
      // } catch (error) {
      //   console.log('error')
      //   return res.status(500).send(errormessage(error));
      // }
    }
  } catch (error) {
    console.log("try catch");
    return res.status(500).send(errormessage(error));
  }
});

module.exports = router;
