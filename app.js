import express from "express";
import userRouter from "./routes/user.js";
import dotenv from "dotenv";
import taskRouter from "./routes/task.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// Load environment variables from the config.env file
dotenv.config({ path: "./data/config.env" });

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

// Use the userRouter for handling requests to /users
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

export default app;
