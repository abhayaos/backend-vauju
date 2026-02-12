import {z} from "zod";

export const commentIdSchema = z.object({
    commentId: z.string().length(24, "Invalid Mongo db id ")
})

export const commentContentSchema = z.object({
    content: z.string().min(1, "Comment content cannot be empty").max(500, "Comment content cannot exceed 500 characters")
})

export const commentReplySchema = z.object({
    commentId: z.string().length(24, "Invalid Mongo db id "),
    replyId: z.string().length(24, "Invalid Mongo db id "),
})