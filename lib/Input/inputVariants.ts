import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "w-fit rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-accent sm:text-sm",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground placeholder:text-primary-foreground/80 hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground placeholder:text-secondary-foreground hover:bg-secondary/80",
        mutted:
          "bg-mutted text-mutted-foreground hover:bg-mutted/80 placeholder:text-mutted-foreground",
        accent:
          "bg-accent text-accent-foreground placeholder:text-accent-foreground hover:bg-accent/80",
        destructive:
          "bg-destructive text-destructive-foreground placeholder:text-destructive-foreground hover:bg-destructive/80",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
