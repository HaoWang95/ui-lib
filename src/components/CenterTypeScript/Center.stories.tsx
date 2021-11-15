import {Story, Meta} from '@storybook/react';
import { Center } from '.'
import { Task } from '../Task';

export default {
    title: 'Layout/CentereTypescript',
    component: Center,
} as Meta;

export const CenteredDefaultTask: Story = () => (<Center>
    <Task id="1" title="Default Task" state="" />
</Center>)