const mongoose = require("mongoose");
const {Schema} = mongoose;

const TestimonialSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  contentview: {
    type: Boolean,
  },
  contentpositionview: {
    type: String,
  },
  date: {
    type: Date,
		default: Date.now
  }
});

const testimonial = mongoose.model("testimonial", TestimonialSchema);
module.exports = testimonial;
