import z from "zod";

export const signInWithEmailBody = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  captchaToken: z.string(),
});

export type SignInWithEmailBody = z.infer<typeof signInWithEmailBody>;

export const signUpWithEmailBody = z.object({
  name: z.string().min(2).max(64),
  email: z.string().email(),
  password: z.string().min(8),
  captchaToken: z.string(),
});

export type SignUpWithEmailBody = z.infer<typeof signUpWithEmailBody>;
