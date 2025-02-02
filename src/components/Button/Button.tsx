// src/components/Button/Button.tsx
import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
    return (
        <button onClick={onClick} className={`btn btn-${variant}`}>
            {label}
        </button>
    );
};



export default Button;