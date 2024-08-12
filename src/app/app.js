import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import userRouter from "../routes/user.routes";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json({limit : "1tb"}));
app.use(express.urlencoded({extended : true}));

// Routers

// User Router
app.use("/api/v1/users",userRouter)

export default app;