import { Router } from "express";
import { getUser, updateUser, getAppStatus, getUsers, deleteUser } from "../../controller/user/userController.js";
import { validateUserUpdateInput } from "../../middleware/validationMiddleware.js";
import { authenticateUser, authorizePermissions } from "../../middleware/authMiddleware.js";
import upload from "../../middleware/multerMiddleware.js" ;

const router = Router();

router.get(
    "/current-user", 
    authenticateUser, 
    getUser
);

router.patch(
    "/update-current-user",
    upload.single('avatar'),
    updateUser
);

router.get(
    "/app-status", 
    authorizePermissions("admin"), 
    getAppStatus
);

router.get(
    "/users", 
    authenticateUser, 
    authorizePermissions("admin"), 
    getUsers
);

router.delete(
    "/users/:id", 
    authenticateUser, 
    authorizePermissions("admin"), 
    deleteUser
);

export default router;