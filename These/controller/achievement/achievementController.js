import { StatusCodes } from "http-status-codes";
import Achievement from "../../models/achievement/achievementModel.js";
import { v2 as cloudinary } from 'cloudinary';
import { promises as fs } from 'fs';

export const getAllAchievements = async (req, res) => {
    let achievements = await Achievement.find({});
    res.status(StatusCodes.OK).json({ achievements });
};

export const createAchievement = async (req, res) => {
    let { title, points } = req.body;

    let { path } = req.file;

    let achievement = {
        title,
        points,
    };

    if (req.file) {
        let response = await cloudinary.uploader.upload(path, { folder: "achievements" });
        await fs.unlink(path);

        achievement.image = response.secure_url;
        achievement.imageId = response.public_id;
    }

    let newAchievement = await Achievement.create(achievement);

    res.status(StatusCodes.CREATED).json({ data: newAchievement });
};

export const getAchievement = async (req, res) => {
    let { id } = req.params;
    let achievement = await Achievement.findById(id);
    res.status(StatusCodes.OK).json({ achievement });
}

export const updateAchievement = async (req, res) => {
    let { id } = req.params;
    let updatedAchievement = await Achievement.findByIdAndUpdate(id, req.body, { new: true });
    res.status(StatusCodes.OK).json({ data: updatedAchievement });
}

export const deleteAchievement = async (req, res) => {
    let { id } = req.params;
    let deletedAchievement = await Achievement.findByIdAndDelete(id);
    res.status(StatusCodes.OK).json({ data: deletedAchievement });
}
