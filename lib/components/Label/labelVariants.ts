import { cva } from "class-variance-authority";

export const labelVariants = cva(
  "ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md px-3 py-2 text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        outline: "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
        primary: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        secondary: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
