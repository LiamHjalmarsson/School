import { UnauthenticatedError } from '../error/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
    let { token } = req.cookies;

    // let authHeader = req.headers['authorization'];
    // let token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        throw new UnauthenticatedError('authentication invalid');
    }

    try {
        const { userId, role } = verifyJWT(token);
        req.user = { userId, role };
        next();
    } catch (error) {
        throw new UnauthenticatedError('authentication invalid');
    }
};

export const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new UnauthorizedError('Unauthorized to access this route');
        }
        next();
    };
};