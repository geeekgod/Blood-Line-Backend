const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true,
    },
    phone:{
      type: String,
      required: true,
    },
    city:{
      type: String,
      required: true,
    },
    pin:{
      type: String,
    },
    bloodGroup:{
      type: String,
      required: true,
    }
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;