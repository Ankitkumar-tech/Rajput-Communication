import express from "express";
import {
  loginController,
  registerController,
  testController,
} from "../Controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
// here we will create router object

const router = express.Router();

//routing
// Register || METHOD POST

router.post("/register", registerController);

// Login || post method

router.post("/login", loginController);

// tested router

router.get("/test", requireSignIn, isAdmin, testController);

export default router;
