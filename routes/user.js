import express from "express";
import authentication from "../middleware/auth.js"; // Default import
import { browser, Register, login, userdetails,logout } from "../controllers/user.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", login);
router.get("/me", authentication, userdetails);
router.get("/logout",logout);
router.get("/browser",browser);

export default router;
