import mongoose from "mongoose";

export const savedSchema = new mongoose.Schema({
    profileId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
    requestId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Request' }]
});

export const Saved = mongoose.model("Saved", savedSchema);

export default Saved;
