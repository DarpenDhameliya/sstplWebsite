const mongoose = require("mongoose");
const {Schema} = mongoose;

const LogoSchema = new Schema({
  festivaldate: {
    type: Date,
  },
  logoimage: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Dynamiclogo = mongoose.model("dynamiclogo", LogoSchema);
module.exports = Dynamiclogo;
