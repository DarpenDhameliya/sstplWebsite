const mongoose = require("mongoose");
const {Schema} = mongoose;

const CareerDetailsSchema = new Schema({
  title: {
    type: String,
  },
  location: {
    type: String,
  },
  position: {
    type: String,
  },
  experience: {
    type: String,
  },
  description: {
    type: String,
  },
  responsibility: {
    type: Schema.Types.Mixed,
  },
  qualification: {
    type: String,
  },
  contentview: {
    type: Boolean,
  },
  contentpositionview: {
    type: String,
  },
});

const careerdetails = mongoose.model("careerdetails", CareerDetailsSchema);
module.exports = careerdetails;
