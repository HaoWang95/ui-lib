import { Story, Meta } from "@storybook/react";
import TaskList from "./TaskList";
import { TaskListProps } from "./TaskList";
import { Center } from "../CenterTypeScript";

export default {
  title: "List/list",
  component: TaskList,
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
} as Meta;

const ListTemplate: Story<TaskListProps> = (args: TaskListProps) => (
  <Center>
    <TaskList {...args} />
  </Center>
);

export const DefaultList: Story<TaskListProps> = ListTemplate.bind({});
DefaultList.args = {
    loading: false,
    tasks: [
        {id: '1', title:'task1', state: ''},
        {id: '2', title:'task2', state: ''},
        {id: '3', title:'task3', state: ''},
        {id: '4', title:'task4', state: ''},
    ],

}

export const LoadingList: Story<TaskListProps> = ListTemplate.bind({});
LoadingList.args = {
    ...DefaultList.args,
    loading: true
}
