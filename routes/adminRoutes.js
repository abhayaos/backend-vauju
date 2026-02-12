import express from "express";
import {
  adminLogin,
  requireAdmin,
  listUsers,
  approveVisibility,
  setVerify,
  setSuspend,
  deleteUser,
} from "../controllers/adminController.js";
import { validate } from "../middleware/zodValidate.js";
import { loginSchema } from "../validations/authRoutes.validation.js";
import { listUsersSchema, setSuspendSchema, verifyUserSchema } from "../validations/adminRoutesValidation.js";
import { userIdSchema } from "../validations/userRoutesValidation.js";

const router = express.Router();

// PUBLIC LOGIN
router.post("/login", validate(loginSchema),adminLogin);

// PROTECTED ROUTES
router.get("/users", requireAdmin,validate(listUsersSchema,"body"), listUsers);
router.get("/pending-visibility", requireAdmin, listUsers); // ?pendingVisibility=true
router.post("/approve-visibility/:userId",validate(userIdSchema,"params"), requireAdmin, approveVisibility);
router.post("/verify/:userId", requireAdmin,validate(userIdSchema,"params"),validate(verifyUserSchema,"body"), setVerify);
router.post("/suspend/:userId",validate(userIdSchema,"params"), validate(setSuspendSchema,"body"),requireAdmin, setSuspend);
router.delete("/users/:userId", validate(userIdSchema,"params") ,requireAdmin, deleteUser);

export default router;
