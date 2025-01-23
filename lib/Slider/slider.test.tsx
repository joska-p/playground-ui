import { render } from "@testing-library/react";
import { Slider } from "./Slider";

describe(`Component: ${Slider.name}`, () => {
  it("should render", () => {
    const { container } = render(
      <Slider
        label="My Label"
        ariaLabel="My Label"
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
          <input
            aria-label="My Label"
            class="slider my-4 h-2 w-full cursor-pointer appearance-none rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-accent bg-primary text-primary-foreground"
            max="100"
            min="0"
            step="1"
            type="range"
            value="50"
          />
          <span
            class="slider-value"
          >
            My Label: 50
          </span>
        </label>
      </div>
    `);
  });
});
