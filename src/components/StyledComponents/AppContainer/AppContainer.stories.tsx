import { AppContainerComponent } from "./AppContainer";
import { Meta, Story } from "@storybook/react";

export default {
  component: AppContainerComponent,
  title: "StyledComponents/AppContainer",
} as Meta;

export const DefaultAppContainer: Story = () => <AppContainerComponent />;
