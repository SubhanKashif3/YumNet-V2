import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : [true,"Fullname is required"],
    },

    username : {
        type : String,
        required : [true,"Username is required"],
        lowercase : true,
        unique : [true,"Username must be unique"],
        trim : true
    },

    email : {
        type : String,
        required : [true,"Username is required"],
        lowercase : true,
        unique : [true,"Username must be unique"],
        trim : true
    },

    password : {
        type : Number,
        required : [true,"Password is required"]
    },

    age : {
        type : Number,
        required : [true,"Age is required"]
    },

    refreshToken : {
        type : String
    }


},{timestamps : true});


userSchema.pre('save', async function (next) {
    // Check if the password is modified before hashing
    if (this.isModified('password')) {
        try {
            // Hash the password
            this.password = await bcrypt.hash(this.password, 10);
        } catch (err) {
            return next(err); // Pass the error to the next middleware
        }
    }
    next(); // Proceed to the next middleware
});

userSchema.methods.generateAccessToken = function(){
    jwt.sign(
        {
            _id : this._id
        }
    )
}

export const User = mongoose.model("User",userSchema);
