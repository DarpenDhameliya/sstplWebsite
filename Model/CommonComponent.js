const mongoose = require("mongoose");
const {Schema} = mongoose;

const CommonComponentSchema = new Schema({
  about:{
    type: Schema.Types.Mixed,
  },
  aboutcontent:{
    type: Schema.Types.Mixed,
  },
  ourevision:{
    type: Schema.Types.Mixed,
  },
  visionconten:{
    type: Schema.Types.Mixed,
  },
  ouremission:{
    type: Schema.Types.Mixed,
  },
  missionconten:{
    type: Schema.Types.Mixed,
  },
  ourecorevalue:{
    type: Schema.Types.Mixed,
  },
  corevalueconten:{
    type: Schema.Types.Mixed,
  },
  date: {
    type: Date,
		default: Date.now
  }

})

const commoncomponent = mongoose.model("commoncomponent", CommonComponentSchema);
module.exports = commoncomponent