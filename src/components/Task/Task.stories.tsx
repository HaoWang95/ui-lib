import * as React from 'react';
import {Story, Meta} from '@storybook/react';
import { Task, TaskProps } from '.';

export default { 
    title: 'List/TaskList',
    component: Task 
} as Meta;

export const BasicTask: Story<TaskProps> = (args: TaskProps) => <Task {...args} />;
BasicTask.args = {
    ...BasicTask.args,
    id: '1',
    title: 'Learn basic tasks with storybook',
    state: ''
}