import express from "express"
import dotenv from "dotenv"
import connectDB from "./connectDB/db.js"

dotenv.config()
express.json()


const port = process.env.PORT 






const app = express()
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    connectDB()
    console.log(`Example app listening on port http://localhost:${port}`)
})