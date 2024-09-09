import {z} from 'zod'

export const userNameValidation = z
    .string()
    .min(2, "Username must have atleast 2 characters")
    .max(20, "Username must not have more then 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not have special character")

export const signUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email("Invalid email"),
    password: z.string().min(8, { message: "Password must have at least 8 characters" })
})