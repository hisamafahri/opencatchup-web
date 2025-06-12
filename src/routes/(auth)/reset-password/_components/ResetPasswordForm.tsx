import { useForm } from "react-hook-form";
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
  resetPasswordBody,
  type ResetPasswordBody,
} from "~/lib/services/api/auth/types";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "~/lib/utils/auth";
import { useQueryState } from "nuqs";
import z from "zod";

const ResetPasswordForm = () => {
  const [, setState] = useQueryState("state");
  const [token] = useQueryState("token");

  const form = useForm<ResetPasswordBody & { confirmNewPassword: string }>({
    resolver: zodResolver(
      resetPasswordBody.extend({ confirmNewPassword: z.string() }),
    ),
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
      token: token || "",
    },
  });

  const resetPasswordMutation = useMutation({
    mutationKey: ["forgotPasswordMutation"],
    mutationFn: resetPassword,
    onSettled: (data) => {
      if (!data || data.error || !data.data) {
        form.setError("newPassword", {
          type: "value",
          message: data?.error?.message || "Invalid password",
        });
        form.setError("confirmNewPassword", {
          type: "value",
          message: data?.error?.message || "Invalid password",
        });

        return;
      }

      setState("password_reset");
    },
  });

  const onSubmit = (
    values: ResetPasswordBody & { confirmNewPassword: string },
  ) => {
    if (values.newPassword !== values.confirmNewPassword) {
      form.setError("newPassword", {
        type: "value",
        message: "Password is not match",
      });
      form.setError("confirmNewPassword", {
        type: "value",
        message: "Password is not match",
      });

      return;
    }
    resetPasswordMutation.mutate(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 w-full mt-4"
      >
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your new password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmNewPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm New Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Retype your new password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full flex items-center justify-end mt-5">
          <Button
            type="submit"
            className="group w-full"
            disabled={!token || resetPasswordMutation.isPending}
          >
            Reset Password
            {resetPasswordMutation.isPending ? (
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

export default ResetPasswordForm;
