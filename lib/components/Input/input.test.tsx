import { render } from "@testing-library/react";
import { Input } from "./Input";

describe(`Component: ${Input.name}`, () => {
  it("should render", () => {
    const { container } = render(<Input type="text" placeholder="My Input" />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <input
          class="flex h-10 w-full rounded-md border border-input px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background text-foreground file:text-foreground/80 placeholder:text-foreground/80"
          placeholder="My Input"
          type="text"
        />
      </div>
    `);
  });
});
