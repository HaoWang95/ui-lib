import { AppContainerComponent } from "./AppContainer";
import { Column } from "../ColumnContainer/Column";
import { Card } from "../CardContainer/Card";
import { Meta, Story } from "@storybook/react";
import { AddNewItem } from "../AddItemButton/AddItemButton";

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
    <AddNewItem 
      dark={false} 
      onAdd={() => {console.log("onAdd")}}
      buttonText="+ Add a new item"
    />
  </AppContainerComponent>
);

export const AppContainerWithAddItemBtn: Story = () => (
  <AppContainerComponent>
    <AddNewItem 
      dark={false} 
      onAdd={() => {console.log("onAdd")}}
      buttonText="+ Add a new item"
    />
  </AppContainerComponent>
);

export const SampleAppContainer: Story = () => (
  <AppContainerComponent>
    <Column text="To Do">
      <Card text="Generate app scaffold" />
    </Column>
    <Column text="In Progress">
      <Card text="Learn Typescript" />
    </Column>
    <Column text="Done">
      <Card text="Begin to use static typing" />
    </Column>
    <AddNewItem 
      onAdd={() => console.log("on add")}
      buttonText="+ Add a new column"
      dark={false}
    />
  </AppContainerComponent>
);