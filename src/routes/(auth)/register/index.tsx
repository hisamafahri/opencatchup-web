import { NavLink } from "react-router";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import EmailForm from "./_components/EmailForm";
import OAuthForm from "./_components/OAuthForm";
import { useQueryState } from "nuqs";
import { EmailSent, EmailVerified } from "../_components/QueryState";

const AuthRegister = () => {
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
                Register to OpenCatchup!
              </h1>
              <EmailForm />
              <OAuthForm />
              <p className="text-muted-foreground text-sm mt-8 text-center">
                Already an account?{" "}
                <NavLink
                  to="/login"
                  className={cn(
                    "text-muted-foreground",
                    buttonVariants({
                      variant: "ghost-link",
                    }),
                  )}
                >
                  Login
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

export default AuthRegister;
