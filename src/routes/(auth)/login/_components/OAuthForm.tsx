import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { signInWithGoogle, signInWithMicrosoft } from "~/lib/utils/auth";

const OAuthForm = () => {
  return (
    <div className="mt-8 space-y-5">
      <div className="relative mt-5">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            Or Continue With
          </span>
        </div>
      </div>

      <div className="flex w-full gap-3">
        <Button variant="outline" className="flex-1" onClick={signInWithGoogle}>
          <Icons.Google />
          Continue with Google
        </Button>
        <Button
          variant="outline"
          className="flex-1"
          onClick={signInWithMicrosoft}
        >
          <Icons.Microsoft />
          Continue with Microsoft
        </Button>
      </div>
    </div>
  );
};

export default OAuthForm;
