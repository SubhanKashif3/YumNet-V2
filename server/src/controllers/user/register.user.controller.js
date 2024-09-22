import { cookieOptions } from "../../constants/controllerConstants.obj.js";
import { User } from "../../models/user.model.js";

export const register = async (req,res) => {
    try {
        const {firstName , lastName , username , email , password , age } = req.body;

        // validate all fields are required
        // use array method .some
        if (![firstName, lastName, username, email, password, age].some(Boolean)) {
            return res.status(400).json({ error: "All fields are required" });
        }
        
        const existedUser = await User.findOne({
            $or : [{username},{email}]
        });

        if  (existedUser){
            return res.status(400).json({ error: "Username or Email already exists" });
        };

        const user = new User({
            firstName,
            lastName,
            username,
            email,
            password,
            age
        });

        /// save user
        const savedUser = await user.save();


        // also login the user
        const accessToken = savedUser.generateAccessToken();
        const refreshToken = savedUser.generateRefreshToken();

        return res.status(201).json({
            message : "Success",
            user : savedUser,
            tokens : {
                accessToken,
                refreshToken
            }
        }).cookie("accessToken",accessToken,cookieOptions).cookie("refreshToken",refreshToken,cookieOptions);



    } catch (error) {
        return res.status(500).json({
            message : "Something went wrong :: register",
            error : error.message
        })
    }
}