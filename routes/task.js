import {login,userall,taskdelete,taskupdate} from "../controllers/task.js";
import express from "express";
import authentication from "../middleware/auth.js";



const router = express.Router();


router.post("/taskregister",authentication,login);
router.get("/alldetails",authentication,userall);
router.put("/:id",authentication,taskupdate);
router.delete("/:id",authentication,taskdelete);


export default router;





