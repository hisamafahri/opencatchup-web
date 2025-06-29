import { NavLink } from "react-router";
import EmailForm from "./_components/EmailForm";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import OAuthForm from "./_components/OAuthForm";
import { useQueryState } from "nuqs";
import { EmailSent, EmailVerified } from "../_components/QueryState";

const AuthLogin = () => {
  const [state] = useQueryState("state");

  return (
    <main className="flex flex-1 h-full">
      <div className="flex-1 flex flex-col items-center justify-between">
        <div />
        <div className="max-w-lg w-full">
          {state === "email_sent" ? (
            <EmailSent />
          ) : state === "email_verified" ? (
            <EmailVerified />
          ) : (
            <>
              <h1 className="text-xl font-medium text-foreground text-center mb-9">
                Login to OpenCatchup!
              </h1>
              <EmailForm />
              <OAuthForm />
              <p className="text-muted-foreground text-sm mt-8 text-center">
                Don't have an account?{" "}
                <NavLink
                  to="/register"
                  className={cn(
                    "text-muted-foreground",
                    buttonVariants({
                      variant: "ghost-link",
                    }),
                  )}
                >
                  Register
                </NavLink>
              </p>
            </>
          )}
        </div>

        <footer className="text-xs text-muted-foreground py-6 max-w-xl w-full">
          <p className="text-center">
            &copy;{new Date().getFullYear()} OpenCatchup
          </p>
          <p className="text-center">
            By continuing, you agree to OpenCatchup's{" "}
            <NavLink
              to="https://google.com"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost-link" }),
                "text-xs",
              )}
            >
              Terms of Service
            </NavLink>{" "}
            and{" "}
            <NavLink
              to="https://google.com"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost-link" }),
                "text-xs",
              )}
            >
              Privacy Policy
            </NavLink>
            .
          </p>
        </footer>
      </div>
    </main>
  );
};

export default AuthLogin;
