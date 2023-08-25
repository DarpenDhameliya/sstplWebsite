const mongoose = require("mongoose");
const mongourl = `mongodb+srv://${process.env.MONGO_ID_FIREBASE}@cluster0.hmau4qd.mongodb.net/softstorm_website?retryWrites=true&w=majority`;
// const mongourl = `mongodb+srv://${process.env.MONGO_ID_dk}@cluster0.udjynea.mongodb.net/sstpl_admin?retryWrites=true&w=majority`

const mongoconnect = async () => {
  try {
    mongoose.connect(mongourl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }).then((result) => {
       console.log('connect')
    })
  } catch (error) {
     console.log("mongoose error ===================>", error);
  }
};

module.exports = mongoconnect;
