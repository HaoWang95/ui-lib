import { Story, Meta } from "@storybook/react";
import { Column, ColumnProps } from "./Column";
import { Center } from "../../CenterTypeScript";

export default {
  component: Column,
  title: "StyledComponents/Column",
} as Meta;

export const EmptyColumn: Story<ColumnProps> = (args: ColumnProps) => (
  <Center>
    <Column {...args} />
  </Center>
);
EmptyColumn.args = {
    text: "Empty Column",
    children: null,
}
