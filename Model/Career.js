const mongoose = require("mongoose");
const {Schema} = mongoose;

const CareerSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  contact: {
    type: String,
    require: true,
  },
  apply_for: {
    type: String,
    require: true,
  },
  resume: {
    type: String,
  },
});

const Career = mongoose.model("career", CareerSchema);
module.exports = Career;
