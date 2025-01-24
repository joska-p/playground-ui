import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "border-input ring-offset-background file:text-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default:
          "bg-background text-foreground file:text-foreground/80 placeholder:text-foreground/80",
        primary:
          "bg-primary text-primary-foreground file:text-primary-foreground/80 placeholder:text-primary-foreground/80",
        destructive:
          "bg-destructive text-destructive-foreground file:text-destructive-foreground/80 placeholder:text-destructive-foreground/80",
        secondary:
          "bg-secondary text-secondary-foreground file:text-secondary-foreground/80 placeholder:text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
