const mongoose = require('mongoose')
const { Schema } = mongoose

const MetaSchema = new Schema({
  url:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  key:{
    type:String,
    required:true
  },
  schema:{
    type:Schema.Types.Mixed,
  },
  date: {
    type: Date,
		default: Date.now
  }
}) 

const Meta = mongoose.model('meta',MetaSchema)
module.exports = Meta;