const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    accessToken: {
        type: String,
        required: true
    },
});

const Session = mongoose.model("Session", SessionSchema);

module.exports = Session;