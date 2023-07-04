const mongoose = require("mongoose");
const {Schema} = mongoose;

const PortfolioSchema = new Schema({
  name: {
    type: String,
  },
  industry: {
    type: String,
  },
  team: {
    type: String,
  },
  duration: {
    type: String,
  },
  country: {
    type: String,
  },
  technology: {
    type: Schema.Types.Mixed,
  },
  category: {
    type: Schema.Types.Mixed,
  },
  contentview: {
    type: Boolean,
  },
  contentpositionview: {
    type: String,
  },
  uploadimg:{
    type: String,
  }
});

const portfolio = mongoose.model("portfolio", PortfolioSchema);
module.exports = portfolio;
