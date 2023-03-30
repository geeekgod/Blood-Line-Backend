import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
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

export const User = mongoose.model("User", UserSchema);

export default User;