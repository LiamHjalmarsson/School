import Category from "../../models/category/categoryModel.js";
import Clothing from "../../models/clothing/clothingModel.js";
import StatusCodes from "http-status-codes";

export const getAllCategorys = async (req, res) => {
    let categories = await Category.find({});

    res.status(StatusCodes.OK).json({ categories });
}

export const createCategory = async (req, res) => {
    req.body.createdBy = req.user.userId;

    let newCategory = await Category.create(req.body);

    res.status(StatusCodes.CREATED).json(
        {
            data: newCategory
        }
    );
}

export const getCategory = async (req, res) => {
    let { id } = req.params;

    let category = await Category.findOne({ category: id });

    res.status(200).json({ category });
}

export const updateCategory = async (req, res) => {
    let { id } = req.params

    let category = await Category.findByIdAndUpdate(id, req.body, {
        new: true
    });

    res.status(StatusCodes.OK).json({ category });
}

export const deleteCategory = async (req, res) => {
    let { id } = req.params

    let category = await Category.findByIdAndDelete(id);

    res.status(StatusCodes.OK).json({ message: "Category was deleted" });
}

export const getClothingByCategory = async (req, res) => {
    let { id } = req.params;

    console.log(id);

    let clothings = await Clothing.find({ category: id });
    res.status(StatusCodes.OK).json({ clothings });
};