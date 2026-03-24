"use client";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Field from "@/components/ui/field";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import Checkbox from "@/components/ui/checkbox";
import Form from "next/form";

const loginSchema = z.object({
  email: z.string().nonempty({ message: "Email is required" }).email({
    message: "Invalid email",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Password must be at most 32 characters long" })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "Password must contain at least one number",
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message:
        "Password must contain at least one special character (!@#$%^&*)",
    }),
  remember: z.boolean().default(false).optional(),
});

type LoginParams = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<LoginParams>({
    resolver: zodResolver(loginSchema),
    values: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: LoginParams) => {
    setIsLoading(true);
    console.log(data);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Form
      action="/api/auth/login"
      name="login"
      className="flex flex-col gap-5 p-10 bg-white shadow-lg rounded-lg w-100 max-w-full items-stretch justify-stretch dark:bg-gray-900 dark:text-gray-100"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <div className="flex flex-col items-stretch justify-center">
        <h1 className="text-2xl font-bold text-indigo-600">Login</h1>
        <p className="text-sm text-gray-600 dark:text-gray-500">
          Enter admin account for access CMS system
        </p>
      </div>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field fieldState={fieldState}>
            <Input
              className="flex-1"
              placeholder="Enter email address..."
              {...field}
            />
          </Field>
        )}
      />
      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field fieldState={fieldState}>
            <Input
              type="password"
              placeholder="Enter your password..."
              {...field}
            />
          </Field>
        )}
      />
      <Controller
        name="remember"
        control={form.control}
        render={({ field }) => <Checkbox label="Remember me" {...field} />}
      />
      <Button type="submit" disabled={isLoading}>
        {(() => {
          if (isLoading) {
            return (
              <div className="flex flex-row gap-3 items-center justify-center">
                <LoaderCircle className="animate-spin" />
                Signing you in...
              </div>
            );
          }

          return "Login";
        })()}
      </Button>
    </Form>
  );
};

export default LoginForm;
