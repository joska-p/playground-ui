import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";
import { Label } from "./Label";

type StoryProps = ComponentProps<typeof Label> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "outline", "primary", "destructive", "secondary"],
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

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default label",
  },
};

export const outline: Story = {
  args: {
    variant: "outline",
    children: "Outline label",
  },
};

export const primary: Story = {
  args: {
    variant: "primary",
    children: "Primary label",
  },
};

export const destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive label",
  },
};

export const secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary label",
  },
};
