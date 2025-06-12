import { useForm, useWatch } from "react-hook-form";
import Turnstile, { useTurnstile } from "react-turnstile";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { ArrowRight, Loader2 } from "lucide-react";
import {
  signUpWithEmailBody,
  type SignUpWithEmailBody,
} from "~/lib/services/api/auth/types";
import { useMutation } from "@tanstack/react-query";
import { signUpWithEmail } from "~/lib/utils/auth";
import { useQueryState } from "nuqs";

const EmailForm = () => {
  const turnstile = useTurnstile();
  const [, setState] = useQueryState("state");

  const form = useForm<SignUpWithEmailBody>({
    resolver: zodResolver(signUpWithEmailBody),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      captchaToken: "",
    },
  });

  const signUpWithEmailMutation = useMutation({
    mutationKey: ["signUpWithEmailMutation"],
    mutationFn: signUpWithEmail,
    onSettled: (data) => {
      if (!data || data.error || !data.data) {
        if (data?.error.message?.toLowerCase().includes("captcha")) {
          form.setError("captchaToken", {
            type: "value",
            message: data?.error?.message || "Invalid captcha token",
          });
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

      setState("email_sent");
    },
  });

  const captchaToken = useWatch({
    control: form.control,
    name: "captchaToken",
  });

  const onSubmit = (values: SignUpWithEmailBody) => {
    signUpWithEmailMutation.mutate(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 w-full mt-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
            disabled={!captchaToken || signUpWithEmailMutation.isPending}
          >
            Register
            {signUpWithEmailMutation.isPending ? (
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
