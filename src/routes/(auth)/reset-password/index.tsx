import { NavLink } from "react-router";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import { useQueryState } from "nuqs";
import { PasswordReset } from "../_components/QueryState";
import ResetPasswordForm from "./_components/ResetPasswordForm";

const AuthResetPassword = () => {
  const [state] = useQueryState("state");

  return (
    <main className="flex flex-1 h-full">
      <div className="flex-1 flex flex-col items-center justify-between">
        <div />
        <div className="max-w-lg w-full">
          {state === "password_reset" ? (
            <PasswordReset />
          ) : (
            <>
              <h1 className="text-xl font-medium text-foreground">
                Reset Your Password
              </h1>
              <ResetPasswordForm />
              <p className="text-muted-foreground text-sm mt-8 text-center">
                Have some problems?{" "}
                <NavLink
                  to="/forgot-password"
                  className={cn(
                    "text-muted-foreground",
                    buttonVariants({
                      variant: "ghost-link",
                    }),
                  )}
                >
                  Send Verification Link
                </NavLink>
              </p>
            </>
          )}
        </div>
        <div />
      </div>
    </main>
  );
};

export default AuthResetPassword;
