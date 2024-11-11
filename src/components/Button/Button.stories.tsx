// src/components/Button/Button.stories.tsx
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
};

export const Primary = () => <Button label="Primary Button" variant="primary" onClick={() => {}} />;
export const Secondary = () => <Button label="Secondary Button" variant="secondary" onClick={() => {}} />;