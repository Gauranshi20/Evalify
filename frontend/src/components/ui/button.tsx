import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap",
    "rounded-xl",
    "font-semibold",
    "transition-all duration-200",
    "select-none",
    "outline-none",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "focus-visible:ring-2",
    "focus-visible:ring-blue-500",
    "focus-visible:ring-offset-2",
    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
    "active:scale-95",
    "hover:-translate-y-0.5",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg",

        destructive:
          "bg-red-600 text-white shadow-md hover:bg-red-700",

        outline:
          "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800",

        secondary:
          "bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700",

        ghost:
          "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",

        link:
          "text-blue-600 underline-offset-4 hover:underline dark:text-blue-400",
      },

      size: {
        default: "h-11 px-5 text-sm",

        sm: "h-9 px-4 text-sm",

        lg: "h-12 px-7 text-base",

        icon: "h-11 w-11",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };