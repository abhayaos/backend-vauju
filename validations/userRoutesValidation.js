import {z} from "zod";

export const usernameSchema = z.object({
    username:z.string().min(3, "Username must be at least 3 characters long")
}
)

export const userIdSchema = z.object({
    id:z.string().length(24, "Invalid Mongo db id ")
}
)

