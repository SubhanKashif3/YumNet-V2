import express from "express";
import cors from "cors"
const app = express();
import cookieParser from "cookie-parser";
import userRouter from "../routes/user.routes.js";
app.use(cors({
    origin : process.env.ORIGIN 
}));

app.use(express.json({limit : "12gb"}));
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())


app.use("/api/users",userRouter)


export default app;
