const mongoose = require("mongoose");
const {Schema} = mongoose;

const PrivacySchema = new Schema({
  privacycontent:{
    type: Schema.Types.Mixed,
  },
  returnpolicycontent:{
    type: Schema.Types.Mixed,
  },
  termscontent:{
    type: Schema.Types.Mixed,
  },
  date: {
    type: Date,
		default: Date.now
  }

})

const privacycomponent = mongoose.model("privacy", PrivacySchema);
module.exports = privacycomponent