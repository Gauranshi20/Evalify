import * as React from "react";
import { cn } from "./utils";

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        [
          "flex h-12 w-full rounded-xl",
          "border",
          "border-slate-300",
          "bg-white",
          "px-4",
          "text-sm",
          "text-slate-900",
          "placeholder:text-slate-400",

          "transition-all duration-200",

          "focus:outline-none",
          "focus:ring-4",
          "focus:ring-violet-500/20",
          "focus:border-violet-500",

          "disabled:cursor-not-allowed",
          "disabled:opacity-60",

          "file:border-0",
          "file:bg-transparent",
          "file:text-sm",
          "file:font-medium",

          "dark:border-slate-700",
          "dark:bg-slate-900",
          "dark:text-white",
          "dark:placeholder:text-slate-500",

          "dark:focus:border-violet-400",
          "dark:focus:ring-violet-400/20",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

export { Input };