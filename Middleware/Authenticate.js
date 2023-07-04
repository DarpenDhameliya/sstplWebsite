var jwt = require('jsonwebtoken');
const JWT_SECRET = "darpendHameliya";
const { errormessage } = require('../response/Response')


const Authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  console.log(req.header)
  if (!token) {
    return res.status(401).send(errormessage("Please Add token "))
  } else {
    try {
      const match_user = jwt.verify(token, JWT_SECRET);
      req.user = match_user.name
      next()
    } catch (error) {
      console.log(error)
      res.status(401).send(errormessage("Token Mismatch"))
    }
  }
}


module.exports = Authenticate;
