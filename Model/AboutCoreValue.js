const mongoose = require("mongoose");
const {Schema} = mongoose;

const AboutCoreValueSchema = new Schema({
  heading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
		default: Date.now
  }
 
});

const aboutcorevalueschema  = mongoose.model("aboutcorevalueschema", AboutCoreValueSchema);
module.exports = aboutcorevalueschema;
