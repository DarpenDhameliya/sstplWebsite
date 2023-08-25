const mongoose = require("mongoose");
const {Schema} = mongoose;

const PortfolioCategoryList = new Schema({
  category: {
    type: Array,
    default: [
      {value: "webapplication", label: "Web"},
      {value: "mobileapplication", label: "Mobile"},
      {value: "desktopsoftware", label: "Desktop"},
    ],
  },
});

const portfoliocategorylist = mongoose.model("portfoliocategorylist", PortfolioCategoryList);
module.exports = portfoliocategorylist;
