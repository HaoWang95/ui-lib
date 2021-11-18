import { Story, Meta } from "@storybook/react";
import { StyledButton, StyledButtonProps } from ".";
import { Center } from "../../CenterTypeScript";

export default {
  title: "StyledComponents/Button",
  component: StyledButton,
} as Meta;

const ButtonTemplate: Story<StyledButtonProps> = (args: StyledButtonProps) => (
  <StyledButton {...args} />
);

export const StyledButtonSample: Story<StyledButtonProps> = ButtonTemplate.bind(
  {}
);
StyledButtonSample.args = {
  text: "StyledButton",
  dark: true,
};

export const CenteredStyledButton: Story<StyledButtonProps> = (
  args: StyledButtonProps
) => (
  <Center>
    <StyledButton {...args} />
  </Center>
);

CenteredStyledButton.args = {
  text: "StyledButton",
  dark: false,
}

CenteredStyledButton.args = {
  text: "CenteredStyledButton",
};

export const AddItemButton: Story<StyledButtonProps> = () => (
  <Center>
    <StyledButton dark={false}>+ Add new item</StyledButton>
  </Center>
);

export const AddItemButtonDark: Story<StyledButtonProps> = (args:StyledButtonProps) => (
  <Center>
    <StyledButton dark={args.dark} {...args}>{args.text}</StyledButton>
  </Center>
);

AddItemButtonDark.args = {
  dark: true,
  text: "+ Add new Item",
  color: ""
}

export const ColoredButton: Story<StyledButtonProps> = (args: StyledButtonProps) => (
  <Center>
    <StyledButton {...args} />
  </Center>
)

ColoredButton.args = {
  dark: false,
  text: "+ Add new item",
  color: "orange",
}


