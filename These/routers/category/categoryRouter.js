import { Router } from "express";
import { createCategory, deleteCategory, getAllCategorys, getCategory, updateCategory, getClothingByCategory } from "../../controller/category/categoryController.js";
import { validateCategoryInput, validateIdParam } from "../../middleware/validationMiddleware.js";
import { authenticateUser } from "../../middleware/authMiddleware.js";
import upload from "../../middleware/multerMiddleware.js";

const router = Router();

router.get("/", getAllCategorys);
router.post("/", authenticateUser, validateCategoryInput, upload.single("image"), createCategory);
router.get("/:id", getCategory);
router.get("/:id/clothing", getClothingByCategory);
router.patch("/:id", authenticateUser, validateIdParam, validateCategoryInput, upload.single("image"), updateCategory);
router.delete("/:id", authenticateUser, validateIdParam, deleteCategory);

export default router;