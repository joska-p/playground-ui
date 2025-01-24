import { fireEvent, render } from "@testing-library/react";
import { Slider } from "./Slider";

describe(`Component: ${Slider.name}`, () => {
  it("should render", () => {
    const { container } = render(
      <Slider
        label="My Label"
        ariaLabel="My Label"
        variant="default"
        min={0}
        max={100}
        step={1}
        value={50}
        onChange={(value) => console.log(value)}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <label
          class="flex cursor-pointer flex-col items-center text-sm md:text-base"
        >
          <span
            class="slider-value"
          >
            My Label: 50
          </span>
          <input
            aria-label="My Label"
            class="slider focus-visible:ring-accent my-4 h-2 w-full cursor-pointer appearance-none rounded-lg outline-hidden focus-visible:ring-2 bg-primary text-primary-foreground"
            max="100"
            min="0"
            step="1"
            type="range"
            value="50"
          />
        </label>
      </div>
    `);
  });

  it("should update call the onChange function with the new value", () => {
    const handleChange = vi.fn();
    const { getByRole } = render(
      <Slider
        label="My Label"
        ariaLabel="My Label"
        min={0}
        max={100}
        step={1}
        value={50}
        onChange={handleChange}
      />
    );

    const rangeInput = getByRole("slider");
    fireEvent.change(rangeInput, { target: { value: 30 } });
    expect(handleChange).toHaveBeenCalledWith(30);
  });

  it("should update the value on the screen", () => {
    const { getByRole, getByText } = render(
      <Slider
        ariaLabel="My Label"
        min={0}
        max={100}
        step={1}
        value={50}
        onChange={(value) => console.log(value)}
      />
    );
    const rangeInput = getByRole("slider");
    fireEvent.change(rangeInput, { target: { value: 30 } });

    const sliderValue = getByText("30");
    expect(sliderValue).toBeInTheDocument();
  });
});
