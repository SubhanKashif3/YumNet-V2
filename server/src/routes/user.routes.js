import { Router } from "express";
import { register } from "../controllers/user/register.user.controller.js";
import { login } from "../controllers/user/login.user.controller.js";

const userRouter = Router();

userRouter.post("/register",register);
userRouter.post("/login",login);
export default userRouter;