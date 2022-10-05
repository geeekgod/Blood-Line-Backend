const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 1,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    uid: {
        type: String,
        required: true,
        unique: true,
    },
    imageUrl: {
        type: String,
    },
    isProfile: {
        type: Boolean,
        default: false,
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;