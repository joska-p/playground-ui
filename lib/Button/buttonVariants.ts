import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-block cursor-pointer rounded-md px-4 py-2 shadow outline-none transition-transform focus-visible:ring-4 focus-visible:ring-accent",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        mutted: "bg-mutted text-mutted-foreground hover:bg-mutted/80",
        accent: "bg-accent text-accent-foreground hover:bg-accent/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
