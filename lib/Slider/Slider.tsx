import type { ComponentProps } from "react";
import { cn } from "../utils/cn";
import styles from "./Slider.module.css";

type LabelProps = ComponentProps<"label">;
type InputProps = ComponentProps<"input">;

const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <label
      className={cn("flex w-fit cursor-pointer flex-col items-center text-sm", className)}
      {...props}
    >
      {children}
    </label>
  );
};

const Input = ({ ref, min, step, max, value, onChange, className, ...props }: InputProps) => {
  return (
    <input
      ref={ref}
      type="range"
      min={min}
      step={step}
      max={max}
      value={value}
      onChange={onChange}
      className={cn(
        "bg-foreground/50 my-4 h-2 w-full cursor-pointer appearance-none rounded-lg outline-none",
        "focus-visible:ring-accent focus-visible:ring-2",
        styles.slider,
        className
      )}
      {...props}
    />
  );
};

export const Slider = { Label, Input };
