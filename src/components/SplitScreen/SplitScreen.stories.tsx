import React from "react";
import { Meta, Story } from "@storybook/react";
import SplitScreen from "./SplitScreen";
import { Center } from "../CenterTypeScript";

export default {
  title: "Basic/SplitScreen",
  component: SplitScreen,
} as Meta;

const LeftComponent: React.FC<{}> = () => (
  <h1 style={{ color: "green" }}>From Left</h1>
);

const RightComponent: React.FC<{}> = () => (
  <h1 style={{ color: "orangered" }}>From Right</h1>
);

export const BasicSplitScreen: Story = () => (
  <SplitScreen left={LeftComponent} right={RightComponent} />
);

export const CenteredSplitScreen: Story = () => (
  <Center>
    <SplitScreen 
      left={LeftComponent}
      right={RightComponent}
    />
  </Center>
)

