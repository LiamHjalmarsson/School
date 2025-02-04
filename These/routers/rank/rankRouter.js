import { Router } from "express";
import { authenticateUser } from "../../middleware/authMiddleware.js";
import { createRank, deleteRank, getAllRanks, getRank, updateRank } from "../../controller/rank/rankController.js";
import { validateRankInput } from "../../middleware/validationMiddleware.js";

const router = Router();

router.get("/", getAllRanks);
router.post("/", authenticateUser, validateRankInput, createRank);
router.get("/:id", getRank);
router.patch("/:id", authenticateUser, validateRankInput, updateRank);
router.delete("/:id", authenticateUser, deleteRank);

export default router;