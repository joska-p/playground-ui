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
      options: ["default", "primary", "destructive", "secondary"],
      control: {
        type: "select",
      },
    },
    type: {
      options: ["text", "email", "file"],
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

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Default placeholder",
    variant: "default",
  },
};

export const primary: Story = {
  args: {
    type: "text",
    placeholder: "Primary placeholder",
    variant: "primary",
  },
};

export const destructive: Story = {
  args: {
    type: "text",
    placeholder: "Destructive placeholder",
    variant: "destructive",
  },
};

export const secondary: Story = {
  args: {
    type: "text",
    placeholder: "Secondary placeholder",
    variant: "secondary",
  },
};
