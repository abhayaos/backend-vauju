import express from "express";
import { registerUser, loginUser, getMe, getUserProfile } from "../controllers/authController.js";
import { auth } from "../middleware/auth.js";
import { validate } from "../middleware/zodValidate.js";
import { loginSchema, registerSchema } from "../validations/authRoutes.validation.js";

const router = express.Router();

router.post("/register",validate(registerSchema),registerUser);
router.post("/login",validate(loginSchema), loginUser);
router.get("/me", auth, getMe);
router.get("/user", auth, getUserProfile);
router.get("/user/me", auth, getUserProfile);

export default router;
