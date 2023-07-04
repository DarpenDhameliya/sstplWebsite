const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  email:{
    type:String,
    require:true,
    unique:true
  },
  password:{
    type:String,
    require:true
  },
  token: {
    type: String,
  },
}) 

const User = mongoose.model('user',UserSchema)
module.exports = User;