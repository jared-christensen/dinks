import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand-yellow-500 text-black font-semibold hover:bg-brand-yellow-400 active:scale-95 active:bg-brand-yellow-600",
        primary:
          "bg-brand-blue-400 text-white font-semibold hover:bg-brand-blue-300 active:scale-95 active:bg-brand-blue-500",
        destructive:
          "bg-brand-red-500 text-white hover:bg-brand-red-600 active:scale-95 active:bg-brand-red-700",
        outline:
          "border border-white/30 bg-transparent text-white hover:bg-white/10 active:scale-95 active:bg-white/20",
        secondary:
          "bg-white/10 text-white hover:bg-white/20 active:scale-95 active:bg-white/30",
        "secondary-blue":
          "bg-brand-blue-500/10 text-brand-blue-500 hover:bg-brand-blue-500/20 active:scale-95 active:bg-brand-blue-500/30",
        ghost:
          "text-white/70 hover:bg-white/10 hover:text-white active:scale-95 active:bg-white/20",
        link: "text-white underline-offset-4 hover:underline active:text-white/70",
      },
      size: {
        default: "h-9 px-5 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
