import dotenv from "dotenv";
import app from "./app/app.js";
import connect from "./database/connectDb.js";
dotenv.config({
    path : "./.env"
});

connect().then(()=>{
    app.listen(process.env.PORT,()=>console.log(`Listening on ::${process.env.PORT}`));
});



