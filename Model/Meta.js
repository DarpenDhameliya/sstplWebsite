const mongoose = require('mongoose')
const { Schema } = mongoose

const MetaSchema = new Schema({
  url:{
    type:String,
    require:true
  },
  title:{
    type:String,
    require:true
  },
  description:{
    type:String,
    require:true
  },
  key:{
    type:String,
    require:true
  },
  schema:{
    type:Schema.Types.Mixed,
  }
}) 

const Meta = mongoose.model('meta',MetaSchema)
module.exports = Meta;