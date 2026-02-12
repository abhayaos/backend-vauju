import express from "express";
import { requireAuth } from "../controllers/profileController.js";
import { sendMessage, getConversation, markSeen, heartbeat, deleteForMe, unsendMessage } from "../controllers/messageController.js";
import { onlineUsers } from "../controllers/onlineController.js";
import { validate } from "../middleware/zodValidate.js";
import { messageIdSchema, messageSchema } from "../validations/messageRoutesValidation.js";
import { userIdSchema } from "../validations/userRoutesValidation.js";

const router = express.Router();

router.post("/send",validate(messageSchema) ,requireAuth, sendMessage);
router.get("/conversation/:userId",validate(userIdSchema,"params") ,requireAuth, getConversation);
router.put("/seen/:messageId",validate(messageIdSchema,"params"), requireAuth, markSeen);
router.post("/heartbeat", requireAuth, heartbeat);
router.get("/online-users", requireAuth, onlineUsers);
router.delete("/delete-for-me/:messageId",validate(messageIdSchema,"params"), requireAuth, deleteForMe);
router.post("/unsend/:messageId",validate(messageIdSchema,"params") ,requireAuth, unsendMessage);

export default router;
