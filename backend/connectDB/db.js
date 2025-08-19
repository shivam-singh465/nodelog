import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


const MONGOConStr = process.env.MONGODB_URI

const connectDB = async (req, res) => {


    try {
        const dbConn = await mongoose.connect('mongodb://127.0.0.1:27017/myapp');

        if (!dbConn) {
            console.log("databases is not connected")
            
        } else {
            console.log("databses is connected")

        }
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;