import { cva } from "class-variance-authority";

export const sliderVariants = cva(
  "slider ui:my-4 ui:h-2 ui:w-full ui:cursor-pointer ui:appearance-none ui:rounded-lg",
  {
    variants: {
      variant: {
        default: "ui:bg-primary ui:text-primary",
        outline: "ui:bg-border ui:text-border",
        destructive: "ui:bg-destructive ui:text-destructive",
        secondary: "ui:bg-secondary ui:text-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
