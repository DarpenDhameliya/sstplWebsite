const mongoose = require("mongoose");
const {Schema} = mongoose;

const AboutCoreValueSchema = new Schema({
  heading: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  file: {
    type: String,
    require: true,
  },
 
});

const aboutcorevalueschema  = mongoose.model("aboutcorevalueschema", AboutCoreValueSchema);
module.exports = aboutcorevalueschema;
