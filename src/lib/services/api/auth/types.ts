import z from "zod";

export const signInWithEmailBody = z.object({
  email: z.string().email().max(64),
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

export const forgetPasswordBody = z.object({
  email: z.string().email().max(64),
  captchaToken: z.string(),
});

export type ForgetPasswordBody = z.infer<typeof forgetPasswordBody>;

export const resetPasswordBody = z.object({
  newPassword: z.string().min(8),
  token: z.string(),
});

export type ResetPasswordBody = z.infer<typeof resetPasswordBody>;
