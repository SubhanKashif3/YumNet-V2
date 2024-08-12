import dotenv from "dotenv";
dotenv.config({
    path : "./.env"
})
import app from "./app/app.js"

app.listen(process.env.PORT);