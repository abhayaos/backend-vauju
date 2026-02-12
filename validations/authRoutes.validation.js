import {regex, z} from "zod";

export const registerSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long").max(30, "Username must be at most 30 characters long").regex(regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores")),
    name: z.string().min(2, "Name must be at least 2 characters long").max(50, "Name must be at most 50 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long").max(100, "Password must be at most 100 characters long"),
});

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long").max(100, "Password must be at most 100 characters long"),
});