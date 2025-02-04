import mongoose from 'mongoose';

const rankSchema = new mongoose.Schema(
    {
        rank: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
        },
        benefits: [{
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
            },
        }],
        thresholdPoints: { 
            type: Number, 
            default: 0 
        },
    },
);

export default mongoose.model('Rank', rankSchema);