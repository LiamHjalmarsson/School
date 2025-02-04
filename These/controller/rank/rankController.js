import Rank from "../../models/rank/rankModel.js";
import StatusCodes from "http-status-codes";

export const getAllRanks = async (req, res) => {
    let ranks = await Rank.find({});
    res.status(StatusCodes.OK).json(ranks);
}

export const createRank = async (req, res) => {
    req.body.createdBy = req.user.userId;

    let rank = await Rank.create(req.body);

    res.status(StatusCodes.CREATED).json(
        {
            data: rank
        }
    );
}

export const getRank = async (req, res) => {
    let { id } = req.params

    let rank = await Rank.findById(id);

    res.status(200).json({ rank });
}

export const updateRank = async (req, res) => {
    let { id } = req.params

    let rank = await Rank.findByIdAndUpdate(id, req.body, {
        new: true
    });

    res.status(StatusCodes.OK).json({ rank });
}

export const deleteRank = async (req, res) => {
    let { id } = req.params

    let rank = await Rank.findByIdAndDelete(id);

    res.status(StatusCodes.OK).json({ message: "Category was deleted" });
}