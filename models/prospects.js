
const mongoose = require("mongoose");

const ProspectSchema = new mongoose.Schema({
  yelp_id: {
    type: String,
    trim: true,
    lowercase: true,
  },
  businessName: {
    type: String,
    trim: true,
    lowercase: true,
    required:true
  },
  displayPhone: {
    type: String,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
    lowercase: true,
  },
  price: {
    type: String,
    trim: true,
    lowercase: true,
  },
  address: {
    type: String,
    trim: true,
    lowercase: true,
  },
  url: {
    type: String,
    trim: true,
    lowercase: true,
  },
  contactEmail: {
    type: String,
    trim: true,
    lowercase: true,
  },
  salesRep: {
    type: String,
    trim: true,
    lowercase: true,
  }, 
});

const Prospect = mongoose.model("Prospects", ProspectSchema);

module.exports = Prospect;