import { AppContainerComponent } from "./AppContainer";
import { Column } from "../ColumnContainer/Column";
import { Meta, Story } from "@storybook/react";
import { AddItemButton } from "../AddItemButton/AddItemButton";
import { Center } from "../../CenterTypeScript";

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

export const AppContainerWithAddItemButton: Story = () => (
  <AppContainerComponent>
    <Column text="ToDo" />
    <AddItemButton 
      dark={false}>
        + Add a new column
    </AddItemButton>
  </AppContainerComponent>
)


export const AppContainerWithAddItemBtn: Story = () => (
  <AppContainerComponent>
    <AddItemButton
      dark={false}
    >
      + Add a new column
    </AddItemButton>
  </AppContainerComponent>
)
