import 'express-async-errors';
import * as dotenv from "dotenv";
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary'

// Imported Routes
import authRouter from "./routers/auth/authRouter.js";
import userRouter from './routers/user/userRouter.js';
import rankRouter from './routers/rank/rankRouter.js';
import categoryRouter from './routers/category/categoryRouter.js';
import clothingRouter from './routers/clothing/clothingRouter.js';
import commentRouter from './routers/comment/commentRouter.js';
import achievementRouter from './routers/achievement/achievementRouter.js';
import purchaseRouter from './routers/purchase/purchaseRoute.js';

// public 
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


// Middleware 
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

const app = express();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "./public")));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/users", authenticateUser, userRouter);
app.use("/api/rank", rankRouter);
app.use("/api/purchase", purchaseRouter);
app.use("/api/category", categoryRouter);
app.use("/api/clothing", clothingRouter);
app.use("/api/comment", commentRouter);
app.use("/api/achievement", achievementRouter);


app.use("*", (req, res) => {
    res.status(404).json(
        {
            message: "Not found!"
        }
    );
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server running on PORT ${port}`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}
