import { z } from "zod";

export const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().min(1, "Email is required").email(),
  message: z
    .string()
    .trim()
    .min(10, "Message must be minimum 10 characters.")
    .max(1000, "Message must be less than 1000 characters."),
});

export type FormSchema = z.infer<typeof formSchema>;
