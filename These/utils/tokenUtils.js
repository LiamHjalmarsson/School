import jwt from 'jsonwebtoken';

export const createJWT = (payload) => {
    let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

    return token;
}

export const verifyJWT = (token) => {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
};