
const allowCORS = function(req, res, next) {
  console.log(req.get)
    var origin = req.get('origin');
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};

module.exports = allowCORS;