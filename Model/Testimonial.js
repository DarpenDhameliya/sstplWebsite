const mongoose = require("mongoose");
const {Schema} = mongoose;

const TestimonialSchema = new Schema({
  image: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  position: {
    type: String,
    require: true,
  },
  discription: {
    type: String,
    require: true,
  },
  contentview: {
    type: Boolean,
  },
  contentpositionview: {
    type: String,
  },
});

const testimonial = mongoose.model("testimonial", TestimonialSchema);
module.exports = testimonial;
