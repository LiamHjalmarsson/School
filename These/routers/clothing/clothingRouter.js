import { Router } from 'express';
import { createClothing, deleteClothing, getAllClothing, getClothing, updateClothing } from '../../controller/clothing/clothingController.js';
import { authenticateUser } from "../../middleware/authMiddleware.js";
import upload from "../../middleware/multerMiddleware.js";

const router = Router();

router.get('/', getAllClothing);
router.post('/', authenticateUser, upload.single('image'), createClothing);
router.get('/:id', getClothing);
router.patch('/:id', authenticateUser, updateClothing);
router.delete('/:id', authenticateUser, deleteClothing);

export default router;