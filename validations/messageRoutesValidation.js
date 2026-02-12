import {z} from "zod";

export const messageSchema = z.object({
   to:z.string().length(24, "Invalid recipient userId"),
    text:z.string().min(1, "Message text cannot be empty").max(1000, "Message text too long")
}
)

export const messageIdSchema = z.object({
    messageId:z.string().length(24, "Invalid messageId")
}
)