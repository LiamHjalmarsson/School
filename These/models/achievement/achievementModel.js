import mongoose from 'mongoose';

const AchievementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    points: {
        type: Number,
        default: 100
    },
    image: {
        type: String,
        default: "https://res.cloudinary.com/dx6tdy5de/image/upload/v1709829147/dl-clothing/trophy_y5giwk.jpg"
    },
    imageId: {
        type: String
    }
});

export default mongoose.model('Achievement', AchievementSchema);
