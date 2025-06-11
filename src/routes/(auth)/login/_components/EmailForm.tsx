import { useForm } from "react-hook-form";
import Turnstile from "react-turnstile";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, buttonVariants } from "~/components/ui/button";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { NavLink } from "react-router";
import { cn } from "~/lib/utils";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const EmailForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
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

        <Turnstile
          sitekey={import.meta.env.VITE_PUBLIC_TURNSTILE_KEY}
          onVerify={(token) => {
            console.log("[TURNSTILE]", token);
          }}
        />

        <div className="w-full flex items-center justify-end mt-5">
          <Button type="submit" className="group w-full">
            Sign In
            <ArrowRight className="transform transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EmailForm;
