const mongoose = require('mongoose')
const { Schema } = mongoose

const HeaderIconSchema = new Schema({
  data:{
    type:Schema.Types.Mixed,
    required:true
  },
  date: {
    type: Date,
		default: Date.now
  }
})

const HeaderIcon = mongoose.model('headericon',HeaderIconSchema)
module.exports = HeaderIcon;