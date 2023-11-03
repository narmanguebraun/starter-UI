import { type Meta, type StoryObj } from "@storybook/react";

import { Main } from "./Main";

const meta = {
  title: "UI/Main",
  component: Main,
  tags: ["autodocs"],
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base = {
  args: {
    children: "Hello world!",
  },
} satisfies Story;
