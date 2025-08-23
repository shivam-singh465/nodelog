import mongoose from "mongoose";
import User from "../models/userModels.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()



const createUser = async (req, res) => {

    const regMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Please fill all fields",
                success: false
            })
        }
        if (!email.match(regMail)) {
            console.log("this is not a valid mail ")
            return res.status(400).json({
                message: "enter the valid mail",
                success: false
            })
        }

        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(400).json({
                message: "user already exist please use another email",
                success: false
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword)


        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        })

        if (newUser) {
            return res.status(201).json({
                message: "User creadted successfully",
                success: true,
                user: newUser
            })

        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "internal server error",
            success: false,

        })
    }

}


const LoginUser = async (req, res) => {

    try {
        const regMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        const { email, password } = req.body;
        // console.log(email , typeof(password))
        if (!email || !password) {
            return res.status(400).json({
                message: "Please fill all fields in login form",
                success: false,
                yourDAta : req.body
            })
        }
        if (!email.match(regMail)) {
            console.log("this is not a valid mail ")
            return res.status(400).json({
                message: "enter the valid mail",
                success: false
            })
        }

        const userExist = await User.findOne({ email })
        if (!userExist) {

            return res.status(400).json({
                message: "user dose not exist",
                success: false,
            })
        }

        const isMatchPassword = await bcrypt.compare(password, userExist.password)
        //  const hashedPassword = await bcrypt.hash(password, 10)
        if (!isMatchPassword) {
            return res.status(400).json({
                message: "password dosen't match plese enter the correct password",
                success: false,

            })
        }

        const userToken = jwt.sign({ id: userExist._id }, process.env.JWT_S_KEY, { expiresIn: "1d" })

        if (!userToken) {
            return res.status(400).json({
                message: "token not genrating plese do somthing",
                success: false
            })
        }


        return res.status(201).json({
            message: "user login successfully",
            success: true,
            token: userToken,
            user: userExist
        })






    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "internal server error",
            success: false,

        })
    }


}

const LogoutUser = async(req, res) => {



}


export { createUser, LoginUser }