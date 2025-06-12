import { NavLink } from "react-router";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";

const AuthForgotPassword = () => {
  return (
    <main className="flex flex-1 h-full">
      <div className="flex-1 flex flex-col items-center justify-between">
        <div />
        <div className="max-w-lg w-full">
          <h1 className="text-xl font-medium text-foreground">
            Reset Your Password
          </h1>
          <p className="text-muted-foreground">Reset Password Form</p>
          <p className="text-muted-foreground text-sm mt-8 text-center">
            Ready to continue?{" "}
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

        <div />
      </div>
    </main>
  );
};

export default AuthForgotPassword;
