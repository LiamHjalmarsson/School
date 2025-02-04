import { Router } from 'express';
const router = Router();

import {
    createPurchase,
    getPurchase,
} from '../../controller/purchase/purchaseController.js';

router.get('/', getPurchase);
router.post('/', createPurchase);

export default router;