import { Router } from "express";
import { validateCategoryInput, validateIdParam } from "../../middleware/validationMiddleware.js";
import { authenticateUser } from "../../middleware/authMiddleware.js";
import { createComment, deleteComment, getAllComments, updateComment } from "../../controller/comment/commentController.js";

const router = Router();

router.get("/", getAllComments);
router.post("/", authenticateUser,  createComment);
router.patch("/:id", authenticateUser, updateComment);
router.delete("/:id", authenticateUser, deleteComment);

export default router;