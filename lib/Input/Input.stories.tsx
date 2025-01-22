import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";
import { Input } from "./Input";

type StoryProps = ComponentProps<typeof Input> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "mutted", "accent", "destructive"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    type: "text",
    placeholder: "Primary placeholder",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    type: "email",
    placeholder: "Secondary placeholder",
    variant: "secondary",
  },
};

export const Mutted: Story = {
  args: {
    type: "password",
    placeholder: "Mutted placeholder",
    variant: "mutted",
  },
};

export const Accent: Story = {
  args: {
    type: "number",
    placeholder: "69",
    variant: "accent",
  },
};

export const Destructive: Story = {
  args: {
    type: "search",
    placeholder: "Destructive placeholder",
    variant: "destructive",
  },
};
