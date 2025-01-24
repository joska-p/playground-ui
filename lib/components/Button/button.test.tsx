import { render } from "@testing-library/react";
import { Button } from "./Button";

describe(`Component: ${Button.name}`, () => {
  it("should render", () => {
    const { container } = render(<Button>My button</Button>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap shadow-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          type="button"
        >
          My button
        </button>
      </div>
    `);
  });
});
