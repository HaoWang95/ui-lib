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
};

export const CenteredStyledButton: Story<StyledButtonProps> = (
  args: StyledButtonProps
) => (
  <Center>
    <StyledButton {...args} />
  </Center>
);

CenteredStyledButton.args = {
  text: "CenteredStyledButton",
};

export const AddItemButton: Story<StyledButtonProps> = () => (
  <Center>
    <StyledButton>+ Add new item</StyledButton>
  </Center>
);
