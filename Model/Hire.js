const mongoose = require("mongoose");
const {Schema} = mongoose;

const HireSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  technology: {
    type: [String],
    required: true,
  },
  skype_id: {
    type: String,
  },
  work_detai: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
  },
  browsernm_browsever: {
    type: String,
  },
  mobile: {
    type:Boolean
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Hire = mongoose.model("hire", HireSchema);
module.exports = Hire;
