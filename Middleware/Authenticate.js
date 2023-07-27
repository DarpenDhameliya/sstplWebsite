var jwt = require("jsonwebtoken");
const JWT_SECRET = "darpendHameliya";
const {errormessage} = require("../response/Response");
const user = require("../Model/User");

const Authenticate = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send(errormessage("Please Add token "));
  } else {
    try {
      var match_user = jwt.verify(token, JWT_SECRET);
      user.find({email: match_user.name}).then((result) => {
        if (token === result[0].token) {
          req.user = match_user.name;
          next();
        } else {
          return res.status(402).send(errormessage("another device login"));
        }
      })
    } catch (error) {
      console.log(error);
      res.status(401).send(errormessage("Token Mismatch"));
    }
  }
};

module.exports = Authenticate;
