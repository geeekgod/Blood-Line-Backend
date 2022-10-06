const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  location: {
    long: {
      type: Number,
      required: true
    },
    lat: {
      type: Number,
      required: true
    },
  }
});

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;