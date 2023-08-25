const mongoose = require("mongoose");
const {Schema} = mongoose;

const ServiceSchema = new Schema({
  heading: {
    type: String,
    required: true,
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
  contentview: {
    type: Boolean,
  },
  contentpositionview: {
    type: Number,
  },
  date: {
    type: Date,
		default: Date.now
  }
});

const service = mongoose.model("service", ServiceSchema);
module.exports = service;
