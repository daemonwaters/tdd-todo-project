import type { StoryObj, Meta } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Add: Story = {
  args: {
    variant: "add"
  },
};

export const Check: Story = {
  args: {
    variant: "check",
  },
};

export const Trash: Story = {
  args: {
    variant: "trash",
  },
};
