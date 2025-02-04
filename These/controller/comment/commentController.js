import { StatusCodes } from "http-status-codes";
import Comment from "../../models/comments/commentModel.js";

export const getAllComments = async (req, res) => {
    let comments = await Comment.find({ });

    res.status(StatusCodes.OK).json({ comments });
}

export const createComment = async (req, res) => {
    req.body.createdBy = req.user.userId;

    let comment = await Comment.create(req.body);

    res.status(StatusCodes.CREATED).json(
        {
            data: comment
        }
    );
}

export const updateComment = async (req, res) => {
    let { id } = req.params

    let comment = await Comment.findByIdAndUpdate(id, req.body, {
        new: true
    });

    res.status(StatusCodes.OK).json({ comment });
}

export const deleteComment = async (req, res) => {
    let { id } = req.params

    await Comment.findByIdAndDelete(id);

    res.status(StatusCodes.OK).json({ message: "Comment was deleted" });
}