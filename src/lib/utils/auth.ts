import { createAuthClient } from "better-auth/react";
import type {
  SignInWithEmailBody,
  SignUpWithEmailBody,
} from "../services/api/auth/types";

export const authClient = createAuthClient({
  basePath: "/auth",
  baseURL: import.meta.env.VITE_PUBLIC_API_URL,
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
}: SignUpWithEmailBody) =>
  authClient.forgetPassword({
    email,
    fetchOptions: {
      headers: {
        "x-captcha-response": captchaToken,
      },
    },
  });
