import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import sendcookie from "../token/feature.js";
import { now } from "mongoose";

const Register = async (req, res) => {
    const { name, email, password, createDate } = req.body;

    let user = await UserModel.findOne({ email });
    if (user) {
        return res.status(400).json({
            success: false,
            message: "User already exists",
        });
    }

    const hashpassword = await bcrypt.hash(password, 10);
    user = await UserModel.create({
        name,
        email,
        password: hashpassword,
        createDate,
    });

    sendcookie(user, res, "Registered successfully", 201);
    console.log(user);
};

const login = async (req, res, next) => {
    const { email, password } = req.body;
    let user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(400).json({
            success: false,
            message: "user not found"
        });
    }
    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch) {
        return res.status(400).json({
            success: false,
            message: "password does not match"
        });
    }
    sendcookie(user, res, "login successfully", 200);
};

const userdetails = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Get all details of user",
        user: req.user,
    });
};

const logout = (req, res) => {
    res.status(200)
        .cookie("token", "", {
            expires: new Date(Date.now() - 1000), // Setting the expiration to a past date
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure:process.env.NODE_ENV === "Development" ? false : true,
        })
        .json({
            success: true,
            message: 'Logged out successfully'
        });
};



export { Register, login, userdetails, logout };
