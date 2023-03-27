const mongoose = require("mongoose");

const ConfigSchema = new mongoose.Schema({
  map_box_token: {
    type: String,
    required: true,
    unique: true,
  },
  map_box_token_active: {
    type: Boolean,
    default: false,
    reuiqred: true,
  }
});

const Config = mongoose.model("Config", ConfigSchema);

module.exports = Config;
