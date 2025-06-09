import { NavLink } from "react-router";
import EmailForm from "./_components/EmailForm";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";

const Auth = () => {
  return (
    <main className="flex flex-1 h-full">
      <div className="flex-1 flex flex-col items-center justify-between">
        <div />
        <div className="max-w-xl w-full">
          <h1 className="text-xl font-medium mb-4 text-foreground">
            Welcome to OpenCatchup!
          </h1>
          <EmailForm />
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

export default Auth;
