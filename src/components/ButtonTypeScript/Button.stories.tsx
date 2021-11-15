import * as React from "react";

import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps, Btn } from "./Button";

export default {
  title: "TypeScript/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "success", "danger"],
      control: {
        type: "radio",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
    },
    backgroundColor: {
      control: "color",
    },
  },
} as Meta;

const PropsTemplate: ButtonProps = {
  variant: "primary",
  backgroundColor: "black",
  size: "small",
  children: "Button",
};

export const Primary: Story<ButtonProps> = () => (
  <Button variant={"primary"} backgroundColor={"black"} size={"small"}>
    PrimaryTsButton
  </Button>
);

export const ButtonTemplate: Story<ButtonProps> = (args: ButtonProps) => (
  <Button
    variant={args.variant}
    backgroundColor={args.backgroundColor}
    size={args.size}
  >
    {args.children}
  </Button>
);
ButtonTemplate.args = PropsTemplate;

export const BtnTemplate: Story<ButtonProps> = (args: ButtonProps) => (
  <Btn {...args} />
);
BtnTemplate.args = {
  variant: "primary",
  size: "large",
  backgroundColor: "pink",
  children: "Btn Template",
};
