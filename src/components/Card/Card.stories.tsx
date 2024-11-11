import { Meta, StoryFn } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        variant: {
            control: 'select',
            options: ['blue', 'purple', 'orange', 'green', 'red'],
        },
        progress: {
            control: { type: 'number', min: 0, max: 100, step: 10 },
        },
    },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const BlueCard = Template.bind({});
BlueCard.args = {
    variant: 'blue',
    title: 'Search inspirations for upcoming project',
    tags: ['website', 'client'],
    note: 'They like our Behance project Mise',
    progress: 40,
};

export const PurpleCardWithTasks = Template.bind({});
PurpleCardWithTasks.args = {
    variant: 'purple',
    title: 'Ginko mobile app design',
    tags: ['mobile app', 'client'],
    note: 'We have a meeting at 2:34 AM',
    progress: 15,
};

export const OrangeCard = Template.bind({});
OrangeCard.args = {
    variant: 'orange',
    title: 'Wehiu product task and the task process pages',
    tags: ['dribbble shot', 'product'],
    progress: 90,
};

export const GreenCard = Template.bind({});
GreenCard.args = {
    variant: 'green',
    title: 'Design CRM shop product page responsive website',
    tags: ['products', 'client'],
    progress: 40,
};

export const RedCardWithNote = Template.bind({});
RedCardWithNote.args = {
    variant: 'red',
    title: 'Make user flow of Akua mobile banking app',
    tags: ['mobile app', 'client'],
    note: 'This needs to be completed by next week',
    progress: 30,
};