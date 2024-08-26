import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        country: {
            type: String,
            // required: true,
        },
        img: {
            type: String,
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        },
        city: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            // required: true,
        },
        password: {
            type: String,
            required: true,
        },
        products: {
            type: Array,
            default: [],
        },
        address: {
            type: String,
        },
        liked: {
            type: Array,
            default: [],
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);