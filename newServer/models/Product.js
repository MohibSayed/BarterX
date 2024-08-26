import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        mrpBuy: {
            type: Number,
            required: true,
        },
        photos: {
            type: [String],
        },
        desc: {
            type: String,
        },
        category: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        condition: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "Available",
        },
        age: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);