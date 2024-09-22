import mongoose from "mongoose";

// Connect to MongoDB

const connect = async () => {
    try {
        const conectioni = await mongoose.connect(process.env.DB_URL);
    } catch (error) {
        console.log("Mongo Db Error::connect",error.message)
        process.exit(1);
    }
}
export default connect