import React from 'react';
import Button from './Button';

export default {
    title: 'Basic/Button',
    component: Button
}

export const PrimaryButton = () => <Button variant="primary">Primary</Button>;
PrimaryButton.storyName = 'A Primary Button example';

export const SecondaryButton = () => <Button variant="secondary">Secondary</Button>;

export const Success = () => <Button variant="success">Success</Button>;

export const Danger = () => <Button variant="danger">Danger</Button>;