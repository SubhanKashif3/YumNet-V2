import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [true,"First name is required"],
    },

    lastName : {
        type : String,
        required : [true,"Last name is required"],
    },

    username : {
        type : String,
        required : [true,"Username is required"],
        unique : [true,"Username must be unique"]
    },

    email : {
        type : String,
        required : [true,"Email is required"],
        unique : [true,"Email must be unique"]
    },

    password : {
        type : String,
        required : [true,"Password is required"],
        minlength : [8,"Password must be at least 8 characters long"]
    },

    age : {
        type : Number,
        required : [true,"Age is required"],
        min : [18,"Age must be at least 18 years old"]
    },

    avatar : {
        type : String,
        default : "https://via.placeholder.com/150"
    },

    refreshToken : String
},{timestamps : true});

userSchema.pre("save",async function (){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
})

userSchema.methods.generateAccessToken =  function(){
    return jwt.sign(
        {
            _id : this._id
        },

        process.env.A_TOKEN_SECRET,

        {
            expiresIn : process.env.A_TOKEN_EXPIRY
        }
    )
};
userSchema.methods.generateRefreshToken =  function(){
    return jwt.sign(
        {
            _id : this._id
        },

        process.env.R_TOKEN_SECRET,

        {
            expiresIn : process.env.R_TOKEN_EXPIRY
        }
    )
};


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}



export const User = mongoose.model("User",userSchema);