const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        minLength: 1,
    },
    last_name: {
        type: String,
        minLength: 1,
    },
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
    },
    token: {
        type: String,
    },
    access_token: {
        type: String,
    },
    google_id: {
        type: String,
    },
    lat: {
        type: String,
    },
    long: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    pincode: {
        type: String,
    },
    blood_group: {
        type: String,
    },
    image_url: {
        type: String,
    },
    last_logged_in: {
        type: String,
    },
    is_complete: {
        type: Boolean,
        default: false,
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;