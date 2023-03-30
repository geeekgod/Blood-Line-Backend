import mongoose from "mongoose";

export const ConfigSchema = new mongoose.Schema({
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

export const Config = mongoose.model("Config", ConfigSchema);

export default Config;
