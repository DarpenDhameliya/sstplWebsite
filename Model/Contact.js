const mongoose = require("mongoose");
const {Schema} = mongoose;

const ContactSchema = new Schema({
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
  subject: {
    type: String,
    required: true,
  },
  help: {
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
    default: Date.now,
  },
});

const Contact = mongoose.model("contact", ContactSchema);
module.exports = Contact;
