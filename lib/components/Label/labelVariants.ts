import { cva } from "class-variance-authority";

export const labelVariants = cva(
  "ui:ring-offset-background ui:focus-visible:ring-ring ui:flex ui:rounded-md ui:px-3 ui:py-2 ui:text-sm ui:leading-none ui:font-medium ui:peer-disabled:cursor-not-allowed ui:peer-disabled:opacity-70 ui:focus-visible:ring-2 ui:focus-visible:ring-offset-2 ui:focus-visible:outline-hidden ui:disabled:cursor-not-allowed ui:disabled:opacity-50 ui:md:text-sm h-10",
  {
    variants: {
      variant: {
        default: "ui:bg-background ui:text-foreground",
        outline:
          "ui:border-input ui:bg-background ui:hover:bg-accent ui:hover:text-accent-foreground border",
        primary: "ui:bg-primary ui:text-primary-foreground",
        destructive: "ui:bg-destructive ui:text-destructive-foreground",
        secondary: "ui:bg-secondary ui:text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
