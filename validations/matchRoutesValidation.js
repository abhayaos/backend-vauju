import { z } from "zod";

export const matchNotificationSchema = z.object({
  recipientId: z.string().length(24, "Invalid recipientId format"),
  message: z.string().max(500).optional()

});