import { NavLink } from "react-router";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";

const AuthRegister = () => {
  return (
    <main className="flex flex-1 h-full">
      <div className="flex-1 flex flex-col items-center justify-between">
        <div />
        <div className="max-w-lg w-full">
          <h1 className="text-xl font-medium text-foreground">
            Register to OpenCatchup!
          </h1>
          <p className="text-muted-foreground">Register Form</p>
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
