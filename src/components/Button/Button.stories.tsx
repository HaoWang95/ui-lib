import React from "react";
import { Meta, Story } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Basic/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success', 'danger'],
      control: {type: 'radio'}
    }
  }
} as Meta;


export const PrimaryDefaultButton: Story = () => <Button variant="primary">PrimaryButton</Button>;

PrimaryDefaultButton.storyName = "Primary Button";

export const SecondaryDefaultButton: Story = () => <Button variant="secondary">SecondaryButton</Button>;

SecondaryDefaultButton.storyName = "Secondary Button";

export const SuccessButton: Story = () => <Button variant="success">SuccessButton</Button>;

SuccessButton.storyName = "Success Button"

export const DangerButton: Story = () => <Button variant="danger">DangerButton</Button>

DangerButton.storyName = "Danger Button"

const Template = args => <Button {...args} />

export const TemplatePrimaryButton: Story = Template.bind({});

TemplatePrimaryButton.args = {
  variant: 'primary',
  content: 'Binded Primary'
};

export const TemplateSecondaryButton: Story = Template.bind({});

TemplateSecondaryButton.args = {
  variant: 'secondary',
  content: 'Binded Secondary'
};

export const TemplateSuccessButton: Story = Template.bind({});

TemplateSuccessButton.args = {
  variant: 'success',
  content: 'Binded Success',
};

export const TemplateDangerButton: Story = Template.bind({});

TemplateDangerButton.args = {
  variant: 'danger',
  content: 'Binded Danger'
}