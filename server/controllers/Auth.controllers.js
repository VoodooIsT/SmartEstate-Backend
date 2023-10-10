 import User from "../models/User.js"
 import bcrypt from "bcrypt"
 import errorHandler from "../utils/error.js"
 import jwt from 'jsonwebtoken'

 
 export const signup = async (req, res, next) => {
    const { userName, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({userName, email, password: hashedPassword});
    try{
        await newUser.save();
        res.status(200).json({
        message: "User Created Successfully!"
    })
    } catch (err) {
        next(err);
    }
 };

 export const signin = async(req, res) => {
    const { email, password } = req.body;

    try {
        const validUser = await User.find({ email });
        if(!validUser) return next(errorHandler(404, "User not found."));
        const validPassword = bcrypt.compareSync(password,validUser.password);
        if(!validPassword) return next(errorHandler(401, "Wrong Credentials"));
        const token = jwt.sign( { id:validUser._id}, process.env.JWT_SECRET);
        res.cockies('access_token', token, { httpOnly: true }).status(200).json(validUser);
    } catch(error) {
        next(error);
    }
 }
 