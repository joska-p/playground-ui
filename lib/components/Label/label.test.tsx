import { render } from "@testing-library/react";
import { Label } from "./Label";

describe(`Component: ${Label.name}`, () => {
  it("should render", () => {
    const { container } = render(<Label>My Label</Label>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <label
          class="ui:ring-offset-background ui:focus-visible:ring-ring ui:flex ui:rounded-md ui:px-3 ui:py-2 ui:text-sm ui:leading-none ui:font-medium ui:peer-disabled:cursor-not-allowed ui:peer-disabled:opacity-70 ui:focus-visible:ring-2 ui:focus-visible:ring-offset-2 ui:focus-visible:outline-hidden ui:disabled:cursor-not-allowed ui:disabled:opacity-50 ui:md:text-sm h-10 ui:bg-background ui:text-foreground"
        >
          My Label
        </label>
      </div>
    `);
  });
});
