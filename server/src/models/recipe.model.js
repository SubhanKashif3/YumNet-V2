import mongoose from "mongoose";


const recipeSchema = new mongoose.Schema({

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : [true,"User is required"]
    },

    title : {
        type : String,
        required : [true,"Recipe title is required"],
    },

    description : {
        type : String,
        required : [true,"Recipe description is required"],
    },

    ingredients : {
        type : [String],
        required : [true,"Recipe ingredients are required"],
    },

    preparationSteps : {
        type : [String],
        required : [true,"Recipe preparation steps are required"],
    },

    cookingTime : {
        type : String,
        required : [true,"Recipe cooking time is required"],
    },

    servings : {
        type : Number,
        default : 0
    },

    video : {
        type : String,
        default : ""
    },

    thumbnail : {
        type : String,
        default : ""
    }


},{timestamps : true});

export const Recipe = mongoose.model("Recipe",recipeSchema);