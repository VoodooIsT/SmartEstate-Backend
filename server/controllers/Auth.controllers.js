 import User from "../models/User.js"
 import bcrypt from "bcrypt"
 
 export const signup = async (req, res) => {
    const { userName, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({userName, email, password: hashedPassword});
    try{
        await newUser.save();
        res.status(200).json({
        message: "User Created Successfully!"
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message:"User Already Exists",

        })
    }
 }