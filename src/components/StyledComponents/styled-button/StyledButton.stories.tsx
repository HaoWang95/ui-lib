import { Story, Meta } from "@storybook/react";
import { StyledButton, StyledButtonProps } from ".";

export default {
  title: "StyledComponents/Button",
  component: StyledButton,
} as Meta;

const ButtonTemplate: Story<StyledButtonProps> = (args: StyledButtonProps) => (
  <StyledButton {...args} />
);

export const StyledButtonSample: Story<StyledButtonProps> = ButtonTemplate.bind({});
StyledButtonSample.args = {
    text: "StyledButton",
}
