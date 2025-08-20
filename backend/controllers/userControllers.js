import mongoose from "mongoose";
import User from "../models/userModels.js";




const createUser =  (req, res) => {
    console.log(req.body)

    const {name ,email,password} = req.body;
    try {
        if(!name && !email && !password){
            console.log("somthing went wrong")
            return res.status(400).json({
                message : "Please fill all fields",
                success:false
            })
        }

        return res.status(200).json({
            message:"user creadted successfully",
            success : false
        })




    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "internal server error",
            success: false,
            message: error.message,
        })
    }

}

// const userLogin = async (req, res) => {

//     try {
        




//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             message: "internal server error",
//             success: false,
//             message: error.message,
//         })
//     }

// }

export {createUser}