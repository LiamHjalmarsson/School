import { Router } from "express";
import { createAchievement, deleteAchievement, getAchievement, getAllAchievements, updateAchievement } from "../../controller/achievement/achievementController.js";
import upload from "../../middleware/multerMiddleware.js";
import { authorizePermissions } from "../../middleware/authMiddleware.js";

const router = Router();

router.get("/", getAllAchievements);
router.post("/", upload.single('image'), createAchievement);
router.get("/:id", getAchievement);
router.patch("/:id", updateAchievement);
router.delete("/:id", deleteAchievement);

export default router;