// Alert.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import InfoCard from './InfoCard';

const meta = {
    component: InfoCard,
    parameters: {
    },
    tags: ['autodocs'],
    // Define which props can be controlled from the Storybook UI
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['success', 'info', 'warning', 'danger']
            },
            description: 'The style variant of the alert'
        },
        title: {
            control: 'text',
            description: 'The title text of the alert'
        },
        body: {
            control: 'text',
            description: 'The main content of the alert'
        }
    },
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof InfoCard>;

// Base story with controls
export const Default: Story = {
    args: {
        variant: 'info',
        title: 'Information',
        body: 'This is a sample alert message.',
    },
};

// Pre-configured stories for each variant
export const Success: Story = {
    args: {
        variant: 'success',
        title: 'Success',
        body: 'The operation was completed successfully.',
    },
};

export const Info: Story = {
    args: {
        variant: 'info',
        title: 'Information',
        body: 'Please review the documentation for more details.',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        title: 'Warning',
        body: 'This action cannot be undone. Please proceed with caution.',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        title: 'Advertencia',
        body: 'Este problema es una variante de un conocido problema NP-duro, por lo que no se conocen y probablemente no existan soluciones eficientes para todos los casos.',
    },
};

// Story demonstrating the component without a title
export const WithoutTitle: Story = {
    args: {
        variant: 'info',
        body: 'This is an alert without a title.',
    },
};

// Story demonstrating long content
export const WithLongContent: Story = {
    args: {
        variant: 'info',
        title: 'Long Content Example',
        body: `
      This is a much longer alert message that demonstrates how the component handles
      multiple lines of text. It might include detailed information, instructions,
      or other content that needs more space to be displayed properly.
      
      It even includes multiple paragraphs to show how spacing works.
    `,
    },
};