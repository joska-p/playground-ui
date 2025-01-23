import { cva } from "class-variance-authority";

export const labelVariants = cva(
  "flex h-10 w-full rounded-md px-3 py-2 text-sm font-medium leading-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 md:text-sm",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
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
