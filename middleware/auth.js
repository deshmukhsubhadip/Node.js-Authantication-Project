import UserModel from "../models/user.js"; // Default import
import jwt from "jsonwebtoken";

const authentication = async (req, res, next) => {
    const {token } = req.cookies;
    if (!token) {
        return res.status(400).json({
            success: false,
            message: "Does not login"
        });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await UserModel.findById(decoded._id);

    next();
};

export default authentication;
