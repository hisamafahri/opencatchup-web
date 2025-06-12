import { useForm } from "react-hook-form";
import Turnstile from "react-turnstile";
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
import { ArrowRight } from "lucide-react";
import {
  signUpWithEmailBody,
  type SignUpWithEmailBody,
} from "~/lib/services/api/auth/types";
import { useMutation } from "@tanstack/react-query";
import { signUpWithEmail } from "~/lib/utils/auth";

const EmailForm = () => {
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

        <Turnstile
          sitekey={import.meta.env.VITE_PUBLIC_TURNSTILE_KEY}
          onVerify={(token) => {
            form.setValue("captchaToken", token);
          }}
        />

        <div className="w-full flex items-center justify-end mt-5">
          <Button type="submit" className="group w-full">
            Register
            <ArrowRight className="transform transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EmailForm;
