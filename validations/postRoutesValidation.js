import {z} from "zod";

export const createPost = z.object({
    title: z.string().min(3, "Title must be at least 5 characters long"),
    content: z.string().min(8, "Content must be at least 10 characters long"),
    image: z.string().optional(),
})

export const postIdSchema = z.object({
    id: z.string().length(24, "Invalid Mongo db id ")
})
