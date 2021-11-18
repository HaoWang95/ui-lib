import { Story, Meta } from "@storybook/react";
import { AddItemButton } from "./AddItemButton";

export default {
  component: AddItemButton,
  title: "StyledComponents/AddItemButton",
} as Meta;

export const DefaultButton: Story = () => (
  <AddItemButton dark={true}>+ Add New Item</AddItemButton>
);
