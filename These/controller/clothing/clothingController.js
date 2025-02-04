import { StatusCodes } from "http-status-codes";
import Clothing from "../../models/clothing/clothingModel.js";
import { v2 as cloudinary } from 'cloudinary';
import { promises as fs } from 'fs';

export const getAllClothing = async (req, res) => {
    let clothings = await Clothing.find({});

    res.status(StatusCodes.OK).json({ clothings });
};

export const createClothing = async (req, res) => {
    let { title, category, brand, price, color } = req.body;

    let { filename, path } = req.file;

    let item = {
        title,
        category,
        brand,
        price: parseFloat(price),
        color,
        size: [],
        gender: []
    };

    let sizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
    let genders = ["male", "female"];

    sizes.forEach(size => {
        if (req.body[size]) {
            item.size.push(size);
        }
    });

    genders.forEach(gender => {
        if (req.body[gender]) {
            item.gender.push(gender);
        }
    });

    if (req.file) {
        let response = await cloudinary.uploader.upload(path,  { folder: "products" });
        await fs.unlink(path);

        item.image = response.secure_url;
        item.imageId = response.public_id;
    }

    console.log(item);

    let newClothing = await Clothing.create(item);

    res.status(StatusCodes.CREATED).json({ data: newClothing });
};

export const getClothing = async (req, res) => {
    let { id } = req.params;

    let clothing = await Clothing.findOne({ title: id });

    res.status(StatusCodes.OK).json({ clothing });
};

export const updateClothing = async (req, res) => {
    let { id } = req.params;

    let updatedClothing = await Clothing.findByIdAndUpdate(id, req.body, {
        new: true,
    });

    res.status(StatusCodes.OK).json({ clothing: updatedClothing });
};

export const deleteClothing = async (req, res) => {
    let { id } = req.params;

    await Clothing.findByIdAndDelete(id);

    res.status(StatusCodes.OK).json({ msg: 'clothing deleted' });
};

