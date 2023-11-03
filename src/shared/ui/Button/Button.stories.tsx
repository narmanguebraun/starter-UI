import { type Meta, type StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base = {
  args: {
    children: "Click",
  },
} satisfies Story;
