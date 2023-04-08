import mongoose from "mongoose";

export const SavedRequestSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  requestId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

export const SavedRequest = mongoose.model("SavedRequest", SavedRequestSchema);

export default SavedRequest;