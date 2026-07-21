import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  GraduationCap,
  Sparkles,
  ShieldCheck,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import PasswordInput from "@/features/auth/components/PasswordInput";
import { useAuth } from "@/app/providers/AuthProvider";

import {
  loginSchema,
  type LoginSchema,
} from "@/features/auth/validation/auth.schema";

export default function LoginPage() {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginSchema) {
    try {
      await login(data.email, data.password);
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
              <Sparkles className="mr-2 h-4 w-4" />
              AI Powered Assessment Platform
            </div>

            <h2 className="mt-8 text-5xl font-bold leading-tight">
              Evaluate answer sheets
              <br />
              in minutes using AI.
            </h2>

            <p className="mt-6 max-w-lg text-lg text-slate-300">
              Upload answer sheets, let Gemini AI evaluate responses,
              generate marks, feedback, keyword analysis and publish
              results instantly.
            </p>

            <div className="mt-12 grid gap-6">

              <div className="flex items-center gap-4">
                <BrainCircuit className="text-blue-400" />
                <span>Gemini AI Powered Evaluation</span>
              </div>

              <div className="flex items-center gap-4">
                <ShieldCheck className="text-emerald-400" />
                <span>98% AI Accuracy</span>
              </div>

              <div className="flex items-center gap-4">
                <ArrowRight className="text-violet-400" />
                <span>Instant Analytics & Reports</span>
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
                <GraduationCap
                  className="text-blue-700"
                  size={34}
                />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-slate-900">
                Welcome Back
              </h2>

              <p className="mt-2 text-slate-500">
                Login to continue to Evalify
              </p>

            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10 space-y-6"
            >

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <Input
                  placeholder="you@example.com"
                  {...register("email")}
                  className="h-11"
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>

                <PasswordInput
                  placeholder="Enter password"
                  {...register("password")}
                />

                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}

              </div>

              <div className="flex items-center justify-between">

                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <Checkbox className="rounded" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Forgot Password?
                </button>

              </div>

              <Button
                className="h-12 w-full rounded-xl text-base font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Signing In...
                  </span>
                ) : (
                  "Sign In"
                )}
              </Button>

            </form>

            <div className="mt-8 text-center text-sm text-slate-600">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Create Account
              </Link>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}