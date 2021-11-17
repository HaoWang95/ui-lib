import { AppContainerComponent } from "./AppContainer";
import { Column } from "../ColumnContainer/Column";
import { Meta, Story } from "@storybook/react";

export default {
  component: AppContainerComponent,
  title: "StyledComponents/AppContainer",
} as Meta;

export const DefaultAppContainer: Story = () => <AppContainerComponent />;

export const AppContainerWithCol: Story = () => (
  <AppContainerComponent>
    <Column text="ToDo" />
  </AppContainerComponent>
);

export const AppContainerWithMultipleCol: Story = () => (
  <AppContainerComponent>
    <Column text="ToDo" />
    <Column text="InProgress" />
    <Column text="Done" />
  </AppContainerComponent>
);
