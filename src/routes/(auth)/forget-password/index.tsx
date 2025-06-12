import { NavLink } from "react-router";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import ForgetPasswordForm from "./_components/ForgetPasswordForm";
import { useQueryState } from "nuqs";
import { ForgetPasswordEmailSent } from "../_components/QueryState";

const AuthForgetPassword = () => {
  const [state] = useQueryState("state");

  return (
    <main className="flex flex-1 h-full">
      <div className="flex-1 flex flex-col items-center justify-between">
        <div />
        <div className="max-w-lg w-full">
          {state === "email_sent" ? (
            <ForgetPasswordEmailSent />
          ) : (
            <>
              <h1 className="text-xl font-medium text-foreground">
                Reset Your Password
              </h1>
              <ForgetPasswordForm />
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
            </>
          )}
        </div>
        <div />
      </div>
    </main>
  );
};

export default AuthForgetPassword;
