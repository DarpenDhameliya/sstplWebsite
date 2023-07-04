const mongoose = require("mongoose");
const {Schema} = mongoose;

const ContactSchema = new Schema({
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
  subject: {
    type: String,
    require: true,
  },
  help: {
    type: String,
  },
});

const Contact = mongoose.model("contact", ContactSchema);
module.exports = Contact;
