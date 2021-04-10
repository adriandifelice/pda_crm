
const mongoose = require("mongoose");

const ProspectSchema = new mongoose.Schema({
  yelp_id: {
    type: String,
    trim: true,
    lowercase: true,
    unique:true,
  },
  businessName: {
    type: String,
    trim: true,
    lowercase: true,
    required:true,
    unique:true,
  },
  contactName: {
    type: String,
    trim: true,
    lowercase: true,
  
  },
  contactTitle: {
    type: String,
    trim: true,
    lowercase: true,
    
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
  restaurantUrl: {
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
  status:{
    type:String,
  },
});

const Prospect = mongoose.model("Prospects", ProspectSchema);

module.exports = Prospect;