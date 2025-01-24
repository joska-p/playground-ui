import { render } from "@testing-library/react";
import { Label } from "./Label";

describe(`Component: ${Label.name}`, () => {
  it("should render", () => {
    const { container } = render(<Label>My Label</Label>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <label
          class="ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md px-3 py-2 text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background text-foreground"
        >
          My Label
        </label>
      </div>
    `);
  });
});
