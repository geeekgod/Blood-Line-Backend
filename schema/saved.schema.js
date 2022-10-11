const mongoose = require('mongoose');

const savedSchema = new mongoose.Schema({
    profileId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
    requestId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Request' }]
});

const Saved = mongoose.model("Saved", savedSchema);

module.exports = Saved;
