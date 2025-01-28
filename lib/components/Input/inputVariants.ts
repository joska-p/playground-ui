import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "ui:border-input ui:ring-offset-background ui:file:text-foreground ui:focus-visible:ring-ring ui:rounded-md ui:border ui:px-3 ui:py-2 ui:text-base ui:file:border-0 ui:file:bg-transparent ui:file:text-sm ui:file:font-medium ui:focus-visible:ring-2 ui:focus-visible:ring-offset-2 ui:focus-visible:outline-hidden ui:disabled:cursor-not-allowed ui:disabled:opacity-50 ui:md:text-sm h-10",
  {
    variants: {
      variant: {
        default:
          "ui:bg-background ui:text-foreground ui:file:text-foreground/80 ui:placeholder:text-foreground/80",
        primary:
          "ui:bg-primary ui:text-primary-foreground ui:file:text-primary-foreground/80 ui:placeholder:text-primary-foreground/80",
        destructive:
          "ui:bg-destructive ui:text-destructive-foreground ui:file:text-destructive-foreground/80 ui:placeholder:text-destructive-foreground/80",
        secondary:
          "ui:bg-secondary ui:text-secondary-foreground ui:file:text-secondary-foreground/80 ui:placeholder:text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
