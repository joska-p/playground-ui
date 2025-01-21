import type { ComponentProps } from "react";
import { cn } from "../utils/cn";

type Props = ComponentProps<"input">;

function Input({ className, ...props }: Props) {
  return (
    <input
      className={cn(
        "border-input placeholder:text-muted-foreground focus:ring-accent w-fit rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 sm:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };
