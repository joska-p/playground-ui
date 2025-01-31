import { fireEvent, render } from "@testing-library/react";
import { vi } from "vitest";
import { Slider } from "./Slider";

describe(`Component: ${Slider.name}`, () => {
  it("should render", () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Slider
        label="My Label"
        ariaLabel="My Label"
        variant="default"
        min={0}
        max={100}
        step={1}
        value={50}
        onChange={handleChange}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <label
          class="ui:flex ui:cursor-pointer ui:flex-col ui:items-center ui:text-sm ui:md:text-base"
        >
          <span>
            My Label: 50
          </span>
          <input
            aria-label="My Label"
            class="slider ui:my-4 ui:h-2 ui:w-full ui:cursor-pointer ui:appearance-none ui:rounded-lg ui:bg-primary ui:text-primary"
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
    const handleChange = vi.fn();
    const { getByRole, getByText } = render(
      <Slider ariaLabel="My Label" min={0} max={100} step={1} value={50} onChange={handleChange} />
    );
    const rangeInput = getByRole("slider");
    fireEvent.change(rangeInput, { target: { value: 30 } });

    const sliderValue = getByText("30");
    expect(sliderValue).toBeInTheDocument();
  });
});
