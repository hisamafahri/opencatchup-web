import { createAuthClient } from "better-auth/react";
import { usernameClient } from "better-auth/client/plugins";
import type {
  ForgetPasswordBody,
  ResetPasswordBody,
  SignInWithEmailBody,
  SignUpWithEmailBody,
} from "../services/api/auth/types";
import { normalizeEmail } from "./string";

export const authClient = createAuthClient({
  basePath: "/auth",
  baseURL: import.meta.env.VITE_PUBLIC_API_URL,
  plugins: [usernameClient()],
  fetchOptions: {
    jsonParser: (text) => {
      const res = JSON.parse(text);
      if (res?.success !== undefined) {
        return res?.data;
      } else {
        return res;
      }
    },
  },
});

export const useSession = authClient.useSession;

export const signInWithEmail = async ({
  email,
  password,
  captchaToken,
}: SignInWithEmailBody) =>
  authClient.signIn.email({
    email,
    password,
    rememberMe: true,
    callbackURL: window.location.origin + "/login?state=email_verified",
    fetchOptions: {
      headers: {
        "x-captcha-response": captchaToken,
      },
    },
  });

export const signInWithGoogle = async () =>
  authClient.signIn.social({
    callbackURL: window.location.origin,
    provider: "google",
    requestSignUp: false,
    errorCallbackURL: window.location.origin + "/login",
  });

export const signInWithMicrosoft = async () =>
  authClient.signIn.social({
    callbackURL: window.location.origin,
    provider: "microsoft",
    requestSignUp: false,
    errorCallbackURL: window.location.origin + "/login",
  });

export const signUpWithEmail = async ({
  name,
  email,
  password,
  captchaToken,
}: SignUpWithEmailBody) =>
  authClient.signUp.email({
    name,
    email,
    password,
    username: normalizeEmail(email, "email_"),
    callbackURL: window.location.origin + "/register?state=email_verified",
    fetchOptions: {
      headers: {
        "x-captcha-response": captchaToken,
      },
    },
  });

export const signUpWithGoogle = async () =>
  authClient.signIn.social({
    callbackURL: window.location.origin,
    provider: "google",
    requestSignUp: true,
    errorCallbackURL: window.location.origin + "/register",
  });

export const signUpWithMicrosoft = async () =>
  authClient.signIn.social({
    callbackURL: window.location.origin,
    provider: "microsoft",
    requestSignUp: true,
    errorCallbackURL: window.location.origin + "/register",
  });

export const signOut = async () => authClient.signOut();

export const forgetPassword = async ({
  email,
  captchaToken,
}: ForgetPasswordBody) =>
  authClient.forgetPassword({
    email,
    redirectTo: "/reset-password",
    fetchOptions: {
      headers: {
        "x-captcha-response": captchaToken,
      },
    },
  });

export const resetPassword = async ({
  newPassword,
  token,
}: ResetPasswordBody) =>
  authClient.resetPassword({
    newPassword,
    token,
  });
