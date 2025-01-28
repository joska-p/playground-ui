import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "ui:ring-offset-background ui:focus-visible:ring-ring ui:inline-flex ui:items-center ui:justify-center ui:gap-2 ui:rounded-md ui:text-sm ui:font-medium ui:whitespace-nowrap ui:shadow-md ui:transition-colors ui:focus-visible:ring-2 ui:focus-visible:ring-offset-2 ui:focus-visible:outline-hidden ui:disabled:pointer-events-none ui:disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "ui:bg-primary ui:text-primary-foreground ui:hover:bg-primary/90",
        destructive: "ui:bg-destructive ui:text-destructive-foreground ui:hover:bg-destructive/90",
        outline:
          "ui:border-input ui:bg-background ui:hover:bg-accent ui:hover:text-accent-foreground border",
        secondary: "ui:bg-secondary ui:text-secondary-foreground ui:hover:bg-secondary/80",
        ghost: "ui:hover:bg-accent ui:hover:text-accent-foreground",
        link: "ui:text-primary ui:underline-offset-4 ui:hover:underline",
      },
      size: {
        default: "ui:h-10 ui:px-4 ui:py-2",
        sm: "ui:h-9 ui:rounded-md ui:px-3",
        lg: "ui:h-11 ui:rounded-md ui:px-8",
        icon: "ui:h-10 ui:w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
