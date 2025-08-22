import express from "express"
import { createUser,LoginUser } from "../controllers/userControllers.js"

const router = express.Router()

router.post("/register", createUser)
router.post("/login", LoginUser)
export default router