import { useForm, useWatch } from "react-hook-form";
import Turnstile, { useTurnstile } from "react-turnstile";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { NavLink, useNavigate } from "react-router";
import { cn } from "~/lib/utils";
import { ArrowRight, Loader2 } from "lucide-react";
import {
  signInWithEmailBody,
  type SignInWithEmailBody,
} from "~/lib/services/api/auth/types";
import { useMutation } from "@tanstack/react-query";
import { signInWithEmail } from "~/lib/utils/auth";
import { useQueryState } from "nuqs";

const EmailForm = () => {
  const navigate = useNavigate();
  const turnstile = useTurnstile();
  const [, setState] = useQueryState("state");

  const form = useForm<SignInWithEmailBody>({
    resolver: zodResolver(signInWithEmailBody),
    defaultValues: {
      email: "",
      password: "",
      captchaToken: "",
    },
  });

  const signInWithEmailMutation = useMutation({
    mutationKey: ["signInWithEmailMutation"],
    mutationFn: signInWithEmail,
    onSettled: (data) => {
      if (!data || data.error || !data.data) {
        if (data?.error.message?.toLowerCase().includes("captcha")) {
          form.setError("captchaToken", {
            type: "value",
            message: data?.error?.message || "Invalid email or password",
          });
        } else if (data?.error.code === "EMAIL_NOT_VERIFIED") {
          setState("email_sent");
          return;
        } else {
          form.setError("email", {
            type: "value",
            message: data?.error?.message || "Invalid email or password",
          });
          form.setError("password", {
            type: "value",
            message: data?.error?.message || "Invalid email or password",
          });
        }

        turnstile.reset();
        return;
      }

      navigate("/");
    },
  });

  const captchaToken = useWatch({
    control: form.control,
    name: "captchaToken",
  });

  const onSubmit = (values: SignInWithEmailBody) => {
    signInWithEmailMutation.mutate(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 w-full mt-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your email address"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Your password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-end -mt-1.5">
          <NavLink
            to="/forgot-password"
            className={cn(
              "text-muted-foreground text-sm",
              buttonVariants({
                variant: "ghost-link",
              }),
            )}
          >
            Forgot Password?
          </NavLink>
        </div>

        <FormField
          control={form.control}
          name="captchaToken"
          render={() => (
            <FormItem>
              <FormControl>
                <Turnstile
                  sitekey={import.meta.env.VITE_PUBLIC_TURNSTILE_KEY}
                  onVerify={(token) => {
                    form.setValue("captchaToken", token);
                  }}
                />
              </FormControl>
              <FormMessage className="-mt-3" />
            </FormItem>
          )}
        />

        <div className="w-full flex items-center justify-end mt-5">
          <Button
            type="submit"
            className="group w-full"
            disabled={!captchaToken || signInWithEmailMutation.isPending}
          >
            Login
            {signInWithEmailMutation.isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              <ArrowRight className="transform transition-transform group-hover:translate-x-0.5" />
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EmailForm;
