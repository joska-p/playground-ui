import type { VariantProps } from "class-variance-authority";
import { useState } from "react";
import { cn } from "../../utils/cn";
import { sliderVariants } from "./sliderVariants";

interface SliderProps extends VariantProps<typeof sliderVariants> {
  ref?: React.Ref<HTMLInputElement>;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  className?: string;
  label?: string;
  ariaLabel?: string;
}

function Slider({
  ref,
  min,
  max,
  step,
  value,
  onChange,
  className,
  variant,
  label,
  ariaLabel,
}: SliderProps) {
  const [sliderValue, setSliderValue] = useState(value);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = parseFloat(event.target.value);
    setSliderValue(newValue);
    onChange(newValue);
  }

  return (
    <label className={"flex cursor-pointer flex-col items-center text-sm md:text-base"}>
      <span className="slider-value">{label ? `${label}: ${sliderValue}` : sliderValue}</span>
      <input
        aria-label={ariaLabel}
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        onChange={handleChange}
        className={cn(sliderVariants({ variant, className }))}
      />
    </label>
  );
}

export { Slider };
