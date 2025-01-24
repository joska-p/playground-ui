import { cva } from "class-variance-authority";

export const sliderVariants = cva(
  "slider focus-visible:ring-accent my-4 h-2 w-full cursor-pointer appearance-none rounded-lg outline-hidden focus-visible:ring-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border-input bg-background border",
        destructive: "bg-destructive text-destructive-foreground",
        secondary: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
