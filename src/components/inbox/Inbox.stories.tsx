import type { StoryObj, Meta } from "@storybook/react";
import Inbox, { InboxProps } from "./Inbox";
import Todo, { TodoProps } from "../todo/Todo";

const MockTodos: Array<TodoProps> = [
  { title: "First Todo", id: 1, checked: false },
  { title: "Second Todo", id: 2, checked: false },
  { title: "Third Todo", id: 3, checked: false },
];

const meta: Meta<InboxProps> = {
  title: "components/Inbox",
  component: Inbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<InboxProps>;

export const Default: Story = {
  render: (args) => <Inbox todos={MockTodos} />,
};

export const withChecked: Story = {
  render: () => (
    <Inbox
      todos={[
        ...MockTodos.slice(0, 2),
        { id: 4, title: "Cleaning my room!", checked: true },
      ]}
    />
  ),
};

export const Empty: Story = {
  args: {
    todos: [],
  },
};

export const Error: Story = {
    args: {
      todos: undefined
    },
  };
