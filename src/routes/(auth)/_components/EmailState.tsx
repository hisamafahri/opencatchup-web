import { Inbox, PartyPopper } from "lucide-react";
import { NavLink } from "react-router";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export const EmailSent = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Inbox className="text-lg text-muted-foreground mb-4" />
      <h1 className="text-xl font-medium text-foreground text-center">
        Check Your Email Inbox!
      </h1>
      <p className="text-muted-foreground text-sm text-center">
        We've sent a verification link to your email. Please follow the
        instructions to complete the process.
      </p>
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
  );
};

export const EmailVerified = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <PartyPopper className="text-lg text-muted-foreground mb-4" />
      <h1 className="text-xl font-medium text-foreground text-center">
        Your Email has been Verified!
      </h1>
      <p className="text-muted-foreground text-sm text-center">
        You can now log in and start using your account.
      </p>
      <p className="text-muted-foreground text-sm mt-8 text-center">
        Let's go!{" "}
        <NavLink
          to="/login"
          className={cn(
            "text-muted-foreground",
            buttonVariants({
              variant: "ghost-link",
            }),
          )}
        >
          Login Here
        </NavLink>
      </p>
    </div>
  );
};
