const mongoose = require("mongoose");
const {Schema} = mongoose;

const PortfolioCategoryList  = new Schema({
  category: {
    type: [String],
    default: ['Web', 'mobile' , 'desktop']
  }
});

const portfoliocategorylist = mongoose.model("portfoliocategorylist", PortfolioCategoryList);
module.exports = portfoliocategorylist;
