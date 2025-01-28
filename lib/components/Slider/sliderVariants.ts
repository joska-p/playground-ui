import { cva } from "class-variance-authority";

export const sliderVariants = cva(
  "slider ui:focus-visible:ring-accent ui:my-4 ui:h-2 ui:w-full ui:cursor-pointer ui:appearance-none ui:rounded-lg ui:outline-hidden ui:focus-visible:ring-2",
  {
    variants: {
      variant: {
        default: "ui:bg-primary ui:text-primary-foreground",
        outline: "ui:border-input ui:bg-background border",
        destructive: "ui:bg-destructive ui:text-destructive-foreground",
        secondary: "ui:bg-secondary ui:text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
