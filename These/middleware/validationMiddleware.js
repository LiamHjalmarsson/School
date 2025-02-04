import { body, param, validationResult } from 'express-validator';
import { BadRequestError, NotFoundError, UnauthorizedError } from '../error/customErrors.js';
import mongoose from 'mongoose';
import Category from '../models/category/categoryModel.js';
import User from '../models/user/userModel.js';

const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        (req, res, next) => {

            let errors = validationResult(req);

            if (!errors.isEmpty()) {
                let errorMessages = errors.array().map((error) => error.msg);

                if (errorMessages[0].startsWith('no category')) {
                    throw new NotFoundError(errorMessages);
                }

                if (errorMessages[0].startsWith("not authorized")) {
                    throw new UnauthorizedError("not authorized to do this");
                }
                throw new BadRequestError(errorMessages);
            }

            next();

        },
    ];
};

export const validateCategoryInput = withValidationErrors(
    [
        body("title").notEmpty().withMessage("title is required"),
        body("gender").isIn(["male", "female"]).withMessage("Invalid gender")
    ]
);

export const validateRankInput = withValidationErrors(
    [
        body("rank").notEmpty().withMessage("rank is required"),
        body("benefits").notEmpty().withMessage("benefits is required"),
    ]
);

export const validateUserRegisterInput = withValidationErrors(
    [
        body("name").notEmpty().withMessage("name is required"),
        body("email").notEmpty().withMessage("email is required")
            .isEmail().withMessage("Please enter a valid email address")
            .custom(async (email) => {
                let user = await User.findOne({ email });

                if (user) {
                    throw new BadRequestError("email already exists");
                }
            }),
        body("password").notEmpty().withMessage("password is required")
            .isLength({ min: 6 }).withMessage("password must be min 6 charasters "),
    ]
);

export const validateUserLoginInput = withValidationErrors(
    [
        body("email").notEmpty().withMessage("email is required")
            .isEmail().withMessage("Please enter a valid email address"),
        body("password").notEmpty().withMessage("password is required")
    ]
);

export const validateIdParam = withValidationErrors(
    [
        param("id").custom(async (value) => {
            let isValidId = mongoose.Types.ObjectId.isValid(value);

            if (!isValidId) {
                throw new BadRequestError("Invalid id in MongoDB " + value)
            }

            let category = await Category.findById(value);

            if (!category) {
                throw new NotFoundError("no category with the id " + value);
            }

            let admin = req.user.role === "admin";
            let owner = req.user.userId === job.createBy.toString();

            if (!admin && !owner) {
                throw new UnauthorizedError("not authorized to do this");
            }
        })
    ]
);

export const validateUserUpdateInput = withValidationErrors(
    // [
    //     body("name").notEmpty().withMessage("name is required"),
    //     body("email").notEmpty().withMessage("email is required")
    //         .isEmail().withMessage("Please enter a valid email address")
    //         .custom(async (email) => {
    //             let user = await User.findOne({ email });

    //             if (user && user._id.toString() !== req.user.userId) {
    //                 throw new BadRequestError("email already exists");
    //             }
    //         }),
    // ]
) 