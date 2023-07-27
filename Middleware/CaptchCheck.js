var jwt = require("jsonwebtoken");
const JWT_SECRET = "darpendHameliya";
const {errormessage} = require("../response/Response");
const user = require("../Model/User");
const axios = require("axios");

const Captchacheck = async (req, res, next) => {
  var token = req.header("captchaToken");
  const SECRET_KEY = process.env.SECRET_KEY;
  if (!token) {
    return res.status(401).send(errormessage("Please Add token "));
  } else {
    try {
      const url = "https://www.google.com/recaptcha/api/siteverify";
      const params = {
        secret: SECRET_KEY,
        response: token,
      };

      const response = await axios.post(url, null, {params});
      const {success} = response.data;
      if (success) {
        next();
      } else {
        return res.status(402).send(errormessage("No Matched"));
      }
    } catch (error) {
      res.status(401).send(errormessage("Token Mismatch"));
    }
  }
};

module.exports = Captchacheck;
