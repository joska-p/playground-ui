import { render } from "@testing-library/react";
import { Button } from "./Button";

describe(`Component: ${Button.name}`, () => {
  it("should render", () => {
    const { container } = render(<Button>My button</Button>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="ui:ring-offset-background ui:focus-visible:ring-ring ui:inline-flex ui:items-center ui:justify-center ui:gap-2 ui:rounded-md ui:text-sm ui:font-medium ui:whitespace-nowrap ui:shadow-md ui:transition-colors ui:focus-visible:ring-2 ui:focus-visible:ring-offset-2 ui:focus-visible:outline-hidden ui:disabled:pointer-events-none ui:disabled:opacity-50 ui:bg-primary ui:text-primary-foreground ui:hover:bg-primary/90 ui:h-10 ui:px-4 ui:py-2"
          type="button"
        >
          My button
        </button>
      </div>
    `);
  });
});
