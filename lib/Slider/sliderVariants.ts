import { cva } from "class-variance-authority";

export const sliderVariants = cva(
  "slider my-4 h-2 w-full cursor-pointer appearance-none rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-accent",
  {
    variants: {
      variant: {
        outline: "border border-input bg-background",
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        secondary: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
