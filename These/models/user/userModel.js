import mongoose from "mongoose";
import Rank from "../rank/rankModel.js";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
        location: {
            city: {
                type: String
            },
            street: {
                type: String
            }
        },
        gender: {
            type: String,
            enum: ["male", "female"],
        },
        password: {
            type: String
        },
        discounts: {
            type: [{
                category: {
                    type: String
                },
                code: {
                    type: String
                }
            }]
        },
        totalPointsEarned: {
            type: Number,
            default: 200
        },
        activePoints: {
            type: Number,
            default: 200
        },
        partOfNewsLetter: {
            type: Boolean,
            default: false
        },
        rank: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Rank',
            default: "663bdc3ad8c2be9fc7371c6c"
        }],
        role: {
            type: String,
            enum: ["user", "admin", "staff"],
            default: "user"
        },
        avatar: {
            type: String,
        },
        avatarPublicId: {
            type: String,
        },
        achievements: {
            type: [{
                name: {
                    type: String,
                },
                points: {
                    type: Number,
                }
            }],
            default: [
                {
                    name: "member",
                    points: 100
                },
                {
                    name: "rank 1",
                    points: 100
                }
            ]
        },
        purchases: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Purchase'
        }],
    }
);

UserSchema.pre('save', async function (next) {
    try {
        let rank = await Rank.findOne({ thresholdPoints: { $lte: this.totalPointsEarned } })
            .sort({ thresholdPoints: -1 })
            .limit(1);

        if (rank) {
            this.rank = rank._id;
        }

        next();
    } catch (error) {
        next(error);
    }
});

export default mongoose.model("User", UserSchema);