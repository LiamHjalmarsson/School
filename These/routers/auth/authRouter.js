import { Router } from "express";
import { login, logout, register } from "../../controller/auth/authController.js";
import { validateUserLoginInput, validateUserRegisterInput } from "../../middleware/validationMiddleware.js";

const router = Router();

router.post("/login", validateUserLoginInput, login);
router.get("/logout", logout);
router.post("/register", validateUserRegisterInput, register);

export default router;