import { z } from "zod";

export const contactSchema = z.object({
  hp: z.string().optional().default(""),
  locale: z.enum(["jp", "vi"]).optional().default("jp"),
  intent: z.enum(["sales", "recruit"]).optional().default("sales"),
  name: z.string().min(1).max(200),
  company: z.string().max(200).optional().default(""),
  email: z.string().email().max(200),
  phone: z.string().max(50).optional().default(""),
  type: z.enum(["sales", "recruit"]).optional().default("sales"),
  message: z.string().min(1).max(5000),
});
