import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  basePath: "/auth",
  baseURL: import.meta.env.VITE_PUBLIC_API_URL,
});

export const useSession = authClient.useSession;

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
