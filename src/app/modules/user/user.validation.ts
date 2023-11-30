import z from "zod";

export const userValidationSchema = z.object({
  id: z.string(),
  password: z.string(),
  needsPasswordChange: z.boolean().default(true),
  role: z.enum(["student", "faculty", "admin"]),
  status: z.enum(["in-progress", "blocked"]).default("in-progress"),
  isDeleted: z.boolean().default(false),
});
