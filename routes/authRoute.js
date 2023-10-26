import express from "express";
import {
  loginController,
  registerController,
} from "../Controllers/authController.js";
// here we will create router object

const router = express.Router();

//routing
// Register || METHOD POST

router.post("/register", registerController);

router.post("/login", loginController);

export default router;
