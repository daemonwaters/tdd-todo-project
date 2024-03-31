import type { StoryObj, Meta, Args } from "@storybook/react";
import Todo from "./Todo";
import { TodoProps } from "./Todo";

// type TodoPros = React.ComponentProps<typeof Todo>

const meta: Meta<TodoProps> = {
  title: "components/Todo",
  component: Todo,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "describes the task",
    },
  },
};

export default meta;

export type Story = StoryObj<Required<TodoProps>>;

export const Default: Story = {
  args: {
    title: "This is a Task!",
    id: 1,
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    ...Default.args,
    id: 2,
    checked: true,
  },
};

export const LongTitle: Story = {
  args: {
    title:
      "This is a very long title todo so don't mind it its just for testing purposes! I have no idea how long this todo gonna be but it must be a very difficult task to tdo!",
    id: 3,
    checked: false,
  },
};

export const LongTitleChecked: Story = {
  args: {
    ...LongTitle.args,
    id: 4,
    checked: true,
  },
};
