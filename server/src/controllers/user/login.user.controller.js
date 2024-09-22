import { cookieOptions } from "../../constants/controllerConstants.obj.js";
import { User } from "../../models/user.model.js";

export const login = async (req,res) => {
    try {
        const {username  , password} = req.body;

        // check if user exists in the database
        
        const user = await User.findOne({username : username})
        
        if(!user){
            return res.status(400).json({msg : "Invalid credentials"});
        }

        // check if password is correct
        
        const isMatch = await user.comparePassword(password);

        if(!isMatch){
            return res.status(400).json({msg : "Invalid credentials"});
        }

        // create json web token (JWT)
        
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();


        res.status(200).json({
            message : "Success :: Logged In",
            user 
        }).cookie("accessToken",accessToken,cookieOptions).cookie("refreshToken",refreshToken,cookieOptions);

        
    } catch (error) {
        return res.status(500).json({
            message : "Something went wrong :: register",
            error : error.message
        })
    }
}