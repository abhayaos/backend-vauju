import { z } from "zod";

export const listUsersSchema = z.object({
    q: z.string().optional(),
    pendingVisibility: z.string().optional(),
  
});

export const verifyUserSchema = z.object({
    verified: z.boolean(),
});

export const setSuspendSchema = z.object({
    suspend: z.boolean(),
});
