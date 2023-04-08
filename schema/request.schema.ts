import mongoose from "mongoose";

export const RequestSchema = new mongoose.Schema({
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
    type: [Number],
    required: true
  }
});

export const Request = mongoose.model("Request", RequestSchema);

export default Request;