const mongoose = require('mongoose')
const mongourl = `mongodb+srv://${process.env.MONGO_ID}@cluster0.udjynea.mongodb.net/?retryWrites=true&w=majority`


const mongoconnect = async () => {
  try {
    mongoose.connect(mongourl,{
              useNewUrlParser: true,
              useUnifiedTopology: true,
              dbName:'sstpl_admin'
          })
      .then(() => console.log('Connected!'));
  } catch (error) {
    console.log('mongoose error ===================>',error)
  }

  
}

module.exports = mongoconnect;

