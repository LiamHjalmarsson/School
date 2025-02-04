import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        gender: {
            type: [{
                type: String,
                enum: ['male', 'female'],
                default: ['male', 'female']
            }],
        },
        itemCount: {
            type: Number,
            default: 1
        },
        image: {
            type: String,
            default: "https://res.cloudinary.com/dx6tdy5de/image/upload/v1710247670/dl-clothing/kzifiwkrz73k6bx4qpv2.jpg",
        },
        imageId: {
            type: String
        },  
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
    },
);

export default mongoose.model('Category', CategorySchema);
