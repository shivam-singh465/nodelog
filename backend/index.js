import express from "express"
import dotenv from "dotenv"
import connectDB from "./connectDB/db.js"
import userRouter from "./routes/userRoutes.js"
import cors from "cors"

dotenv.config()

const app = express()

// ✅ Middleware
app.use(express.json()); // parse JSON
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,

}
app.use(cors(corsOptions));

// ✅ Routes
app.use("/api/v1/user", userRouter)
// Example: http://localhost:3000/api/v1/user/register

// ✅ Start Server
const port = process.env.PORT;
app.listen(port, () => {
    connectDB()
    console.log(`Server running on http://localhost:${port}`)
})
