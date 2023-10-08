import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js"


dotenv.config();

mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log("Databse Connection Successfull!")
}).catch((err) => {
    console.log(err);
})

const app = express();


app.listen(3000, () => {
    console.log("App is running at port:3000");
});
    

app.use(express.json());

app.use('/api/v1', userRouter);
app.use('/api/v1', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})

export default app