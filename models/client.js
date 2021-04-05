
const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  businessName: {
    type: String,
    trim: true,
    lowercase: true,
    required:true
  },
  contactEmail: {
    type: String,
    trim: true,
    lowercase: true,
  },
  address: {
    type: String,
    trim: true,
    lowercase: true,
  },
  reference: {
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

const Client = mongoose.model("Clients", ClientSchema);

module.exports = Client;