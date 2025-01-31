import { render } from "@testing-library/react";
import { Input } from "./Input";

describe(`Component: ${Input.name}`, () => {
  it("should render", () => {
    const { container } = render(<Input type="text" placeholder="My Input" />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <input
          class="ui:border-input ui:ring-offset-background ui:focus-visible:ring-ring ui:rounded-md ui:border ui:px-3 ui:py-2 ui:text-base ui:file:border-0 ui:file:bg-transparent ui:file:text-sm ui:file:font-medium ui:focus-visible:ring-2 ui:focus-visible:ring-offset-2 ui:focus-visible:outline-hidden ui:disabled:cursor-not-allowed ui:disabled:opacity-50 ui:md:text-sm ui:h-10 ui:bg-background ui:text-foreground ui:file:text-foreground/80 ui:placeholder:text-foreground/80"
          placeholder="My Input"
          type="text"
        />
      </div>
    `);
  });
});
