import { StatusCodes } from 'http-status-codes';
import Purchase from '../../models/purchase/purchaseModel.js';

export const getPurchase = async (req, res) => {
    let purchase = await Purchase.find({});

    res.status(StatusCodes.OK).json({ purchase });
}

export const createPurchase = async (req, res) => {
    try {
        let purchase = await Purchase.create(req.body);

        res.status(201).json({ purchase });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default createPurchase;
