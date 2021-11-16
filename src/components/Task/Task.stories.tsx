import {Story, Meta} from '@storybook/react';
import { Task, TaskProps } from '.';

export default { 
    title: 'List/TaskList',
    component: Task 
} as Meta;

const TaskTemplate: Story<TaskProps> = (args: TaskProps) => <Task {...args} />

export const BasicTask: Story<TaskProps> = TaskTemplate.bind({});
BasicTask.args = {
    title:'React Task'
}

export const Pinned: Story<TaskProps> = TaskTemplate.bind({});
Pinned.args = {
    ...BasicTask.args,
    id:'1',
    title: 'Test Task',
}

export const Archived: Story<TaskProps> = TaskTemplate.bind({});
Archived.args = {
    ...Pinned.args,
    state: 'TASK_ARCHIVED'
}