import { comparePassword, hashPassword } from "../../utils/passwordUtils.js";
import { StatusCodes } from "http-status-codes";
import User from "../../models/user/userModel.js";
import { UnauthenticatedError } from "../../error/customErrors.js";
import { createJWT } from "../../utils/tokenUtils.js";

export const login = async (req, res) => {
    let user = await User.findOne({ 
        email: req.body.email 
    });

    if (!user) {
        throw new UnauthenticatedError("Invalid credentials");
    }

    let passwordCorrect = await comparePassword(req.body.password, user.password);

    if (!passwordCorrect) {
        throw new UnauthenticatedError("Invalid credentials");
    }

    let token = createJWT({
        userId: user._id,
        role: user.role
    });

    let oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === "production",
    });

    res.status(StatusCodes.OK).json({ 
        token 
    });
}

export const logout = async (req, res) => {
    res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now())
    });

    res.status(StatusCodes.OK).json({ message: "User logged out" });
}

export const register = async (req, res) => {
    let isAdmin = await User.countDocuments() === 0; 
    req.body.role = isAdmin ? "admin" : "user";

    let hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    let user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ user });
} 