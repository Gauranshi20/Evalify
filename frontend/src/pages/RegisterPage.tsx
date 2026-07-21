import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  GraduationCap,
  User,
  Mail,
  Lock,
  UserPlus,
  AlertCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import PasswordInput from "@/features/auth/components/PasswordInput";

import { useAuth } from "@/app/providers/AuthProvider";

import {
  registerSchema,
  type RegisterSchema,
} from "@/features/auth/validation/auth.schema";

export default function RegisterPage() {
  const { register: registerUser } = useAuth();

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "student",
      rollNumber: "",
    },
  });

  const currentRole = form.watch("role");

  async function onSubmit(values: RegisterSchema) {
    try {
      await registerUser(values);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT */}

        <div className="hidden lg:flex flex-col justify-between p-14 text-white">

          <div className="flex items-center gap-3">

            <div className="rounded-2xl bg-blue-600 p-3">
              <GraduationCap size={32} />
            </div>

            <div>

              <h1 className="text-3xl font-bold">
                Evalify AI
              </h1>

              <p className="text-slate-300">
                Intelligent Answer Evaluation
              </p>

            </div>

          </div>

          <div>

            <div className="inline-flex items-center rounded-full bg-blue-500/20 px-5 py-2 text-blue-300 backdrop-blur">

              <UserPlus className="mr-2 h-4 w-4" />

              Join Our Platform

            </div>

            <h2 className="mt-8 text-5xl font-bold leading-tight">

              Create your account

              <br />

              in seconds.

            </h2>

            <p className="mt-6 max-w-lg text-lg text-slate-300">

              Register as a Student or Parent to access AI-powered
              evaluation, monitor academic performance and receive
              detailed progress insights.

            </p>

            <div className="mt-12 grid gap-6">

              <div className="flex items-center gap-4">

                <User className="text-blue-400" />

                <span>Role Based Access</span>

              </div>

              <div className="flex items-center gap-4">

                <Lock className="text-emerald-400" />

                <span>Secure Authentication</span>

              </div>

              <div className="flex items-center gap-4">

                <Mail className="text-violet-400" />

                <span>Instant Verification</span>

              </div>

            </div>

          </div>

          <p className="text-sm text-slate-500">

            © 2026 Evalify AI

          </p>

        </div>

        {/* RIGHT */}

        <div className="flex items-center justify-center p-8">

          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/90 p-10 shadow-2xl backdrop-blur">

            <div className="text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">

                <UserPlus
                  className="text-blue-700"
                  size={34}
                />

              </div>

              <h2 className="mt-6 text-3xl font-bold text-slate-900">

                Create Account

              </h2>

              <p className="mt-2 text-slate-500">

                Create your Student or Parent account

              </p>

            </div>

            <Form {...form}>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-10 space-y-5"
              >

                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>

                      <FormLabel>

                        Full Name

                      </FormLabel>

                      <FormControl>

                        <Input
                          {...field}
                          autoComplete="name"
                          placeholder="Enter your full name"
                          className="h-11"
                        />

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

                      <FormLabel>

                        Email Address

                      </FormLabel>

                      <FormControl>

                        <Input
                          {...field}
                          type="email"
                          autoComplete="email"
                          placeholder="john@example.com"
                          className="h-11"
                        />

                      </FormControl>

                      <FormMessage />

                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>

                      <FormLabel>

                        I am a

                      </FormLabel>

                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >

                        <FormControl>

                          <SelectTrigger className="h-12">

                            <SelectValue placeholder="Select your role" />

                          </SelectTrigger>

                        </FormControl>

                        <SelectContent>

                          <SelectItem value="student">

                            🎓 Student

                          </SelectItem>

                          <SelectItem value="parent">

                            👨‍👩‍👧 Parent

                          </SelectItem>

                        </SelectContent>

                      </Select>

                      <FormMessage />

                    </FormItem>
                  )}
                />
                                {currentRole === "parent" && (
                  <FormField
                    control={form.control}
                    name="rollNumber"
                    render={({ field }) => (
                      <FormItem>

                        <FormLabel>

                          Student Roll Number

                        </FormLabel>

                        <FormControl>

                          <Input
                            {...field}
                            placeholder="Enter your child's roll number"
                            className="h-11"
                          />

                        </FormControl>

                        <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">

                          <AlertCircle className="h-3 w-3" />

                          Required to connect with your child's account

                        </p>

                        <FormMessage />

                      </FormItem>
                    )}
                  />
                )}

                {currentRole === "student" && (
                  <FormField
                    control={form.control}
                    name="rollNumber"
                    render={({ field }) => (
                      <FormItem>

                        <FormLabel>

                          Roll Number (Optional)

                        </FormLabel>

                        <FormControl>

                          <Input
                            {...field}
                            placeholder="Enter your roll number"
                            className="h-11"
                          />

                        </FormControl>

                        <FormMessage />

                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>

                      <FormLabel>

                        Password

                      </FormLabel>

                      <FormControl>

                        <PasswordInput
                          {...field}
                          autoComplete="new-password"
                          placeholder="Create a strong password"
                        />

                      </FormControl>

                      <FormMessage />

                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>

                      <FormLabel>

                        Confirm Password

                      </FormLabel>

                      <FormControl>

                        <PasswordInput
                          {...field}
                          autoComplete="new-password"
                          placeholder="Confirm your password"
                        />

                      </FormControl>

                      <FormMessage />

                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="h-12 w-full rounded-xl text-base font-semibold"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">

                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />

                      Creating Account...

                    </span>
                  ) : (
                    "Create Account"
                  )}
                </Button>

                <p className="text-center text-sm text-slate-600">

                  Already have an account?{" "}

                  <Link
                    to="/login"
                    className="font-semibold text-blue-600 transition hover:text-blue-700"
                  >
                    Sign In
                  </Link>

                </p>

              </form>

            </Form>

          </div>

        </div>

      </div>

    </div>
  );
}