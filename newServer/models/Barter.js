import mongoose from "mongoose";
const BarterSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        inexchangeof: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        requestedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        requestedFor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "accepted", "rejected"],
            default: "pending",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Barter", BarterSchema);