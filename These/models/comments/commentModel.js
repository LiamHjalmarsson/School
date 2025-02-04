import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        text: {
            type: String
        },
    },
    { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
