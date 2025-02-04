import mongoose from 'mongoose';
import Category from '../category/categoryModel.js';

const ClothingSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            default: "dl"
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        gender: {
            type: [{
                type: String,
                enum: ['male', 'female']
            }],
            default: ["male", "female"]
        },
        size: {
            type: [{
                type: String,
                enum: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']
            }],
            default: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']
        },
        inStock: {
            type: Boolean,
            default: true
        },
        color: {
            type: String,
        },
        averageRating: {
            type: Number,
        },
        totalRatings: {
            type: Number
        },
        image: {
            type: String,
            default: "https://res.cloudinary.com/dx6tdy5de/image/upload/v1710247670/dl-clothing/kzifiwkrz73k6bx4qpv2.jpg"
        },
        imageId: {
            type: String,
        },
        images: {
            type: [String],
            default: [
                "https://res.cloudinary.com/dx6tdy5de/image/upload/v1710247670/dl-clothing/kzifiwkrz73k6bx4qpv2.jpg",
            ],
        },
        description: {
            type: String,
        },
        comments: {
            type: [
                {
                    userId: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'User'
                    },
                }
            ]
        }
    },
);


ClothingSchema.pre('save', async function(next) {
    try {
        let existingCategory = await Category.findOne({ title: this.category });

        if (!existingCategory) {
            let newCategory = new Category({ title: this.category, image: this.image, imageId: this.imageId, gender: this.gender });
            await newCategory.save();
        } else {
            existingCategory.itemCount += 1;
            await existingCategory.save();
        }
        next();
    } catch (error) {
        next(error);
    }
});

export default mongoose.model('Clothing', ClothingSchema);