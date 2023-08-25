const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  email:{
    type:String,
    required:[true , 'Email Required !!'],
    unique:true
  },
  password:{
    type:String,
    required:[true , 'Password Required !!']
  },
  token: {
    type: String,
  },
  date: {
    type: Date,
		default: Date.now
  }
}) 

const User = mongoose.model('user',UserSchema)
module.exports = User;