const mongoose = require('mongoose')
const { Schema } = mongoose

const HireSchema = new Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  contact:{
    type:String,
    require:true
  },
  technology:{
    type:[String],
    require:true
  },
  skype_id:{
    type:String,
  },
  work_detai:{
    type:String,
    require:true
  }  
}) 

const Hire = mongoose.model('hire',HireSchema)
module.exports = Hire;