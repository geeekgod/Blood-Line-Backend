import mongoose from "mongoose";

export const SessionSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    accessToken: {
        type: String,
        required: true
    },
});

export const Session = mongoose.model("Session", SessionSchema);

export default Session;