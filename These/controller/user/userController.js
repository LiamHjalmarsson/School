import { StatusCodes } from "http-status-codes";
import User from "../../models/user/userModel.js";
import Category from "../../models/category/categoryModel.js";
import { BadRequestError } from "../../error/customErrors.js";
import Purchase from "../../models/purchase/purchaseModel.js";
import Clothing from "../../models/clothing/clothingModel.js";
import { v2 as cloudinary } from 'cloudinary'
import { promises as fs } from 'fs';
import Rank from "../../models/rank/rankModel.js";
import Achievement from "../../models/achievement/achievementModel.js";

export const getUser = async (req, res) => {
    let user = await User.findOne({ _id: req.user.userId });

    if (!user) {
        throw new BadRequestError("User not found");
    }

    res.status(StatusCodes.OK).json({ user });
}

export const getUsers = async (req, res) => {
    let users = await User.find({});

    res.status(StatusCodes.OK).json({ users });
}

export const updateUser = async (req, res) => {
    let user = { ...req.body };

    if (req.file) {
        await cloudinary.uploader.destroy(user.public_id);

        let response = await cloudinary.uploader.upload(req.file.path, { folder: "avatars" });
        await fs.unlink(req.file.path);

        user.avatar = response.secure_url;
        user.avatarPublicId = response.public_id;
    }

    await User.findByIdAndUpdate(req.user.userId, user);

    res.status(StatusCodes.OK).json({ message: "User updated" });
}

export const getAppStatus = async (req, res) => {
    let users = await User.countDocuments();
    let categories = await Category.countDocuments();
    let purchases = await Purchase.countDocuments();
    let products = await Clothing.countDocuments();
    let ranks = await Rank.countDocuments();
    let achievements = await Achievement.countDocuments();

    res.status(StatusCodes.OK).json({
        users,
        categories,
        purchases,
        products,
        ranks,
        achievements
    });
}

export const deleteUser = async (req, res) => {
    let { id } = req.params;

    await User.findByIdAndDelete(id);

    res.status(StatusCodes.OK).json({ message: "Category was deleted" });
}

