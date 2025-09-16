import { z } from "zod";

export const createUserSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(100, { message: "Name must be at most 100 characters long" }),

  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Invalid email address" })
    .max(100, { message: "Email must be at most 100 characters long" }),

  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters long" })
    .max(200, { message: "Address must be at most 200 characters long" }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
