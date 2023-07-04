const mongoose = require("mongoose");
const {Schema} = mongoose;

const ServiceSchema = new Schema({
  heading: {
    type: String,
    require: true,
  },
  fontimgid: {
    type: Number,
  },
  serviceimgid: {
    type: Number,
  },
  frontpageimg: {
    type: String,
  },
  servicepageimg: {
    type: String,
  },
  content: {
    type: String,
  },
});

const service = mongoose.model("service", ServiceSchema);
module.exports = service;
