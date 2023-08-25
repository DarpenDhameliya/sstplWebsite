const mongoose = require("mongoose");
const {Schema} = mongoose;

const CareerSchema = new Schema({
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
  apply_for: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
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
		default: Date.now
  }
});

const Career = mongoose.model("career", CareerSchema);
module.exports = Career;
