import React from "react";
import { Meta, Story } from "@storybook/react";
import SplitScreen from "./SplitScreen";

export default {
  title: "Basic/SplitScreen",
  component: SplitScreen,
} as Meta;

const LeftComponent: React.FC<{}> = () => (
  <h1 style={{ color: "green" }}>Left Component</h1>
);

const RightComponent: React.FC<{}> = () => (
  <h1 style={{ color: "orangered" }}>Right Component</h1>
);

export const BasicSplitScreen: Story = () => (
  <SplitScreen left={LeftComponent} right={RightComponent} />
);

