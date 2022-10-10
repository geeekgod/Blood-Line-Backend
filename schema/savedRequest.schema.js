const mongoose = require("mongoose");

const SavedRequestSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  requestId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const SavedRequest = mongoose.model("SavedRequest", SavedRequestSchema);

module.exports = SavedRequest;