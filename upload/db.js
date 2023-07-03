const mongoose = require('mongoose')
const mongourl = "mongodb+srv://darpensstpl:BnrKB3DBCeEiWC2x@cluster0.udjynea.mongodb.net/?retryWrites=true&w=majority"


const mongoconnect = async () => {
  try {
    mongoose.connect(mongourl)
      .then(() => console.log('Connected!'));
  } catch (error) {
    console.log('mongoose error ===================>',error)
  }
  
}

module.exports = mongoconnect;

