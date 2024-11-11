import React from 'react';

export interface CardProps {
    variant: 'blue' | 'purple' | 'orange' | 'green' | 'red';
    title: string;
    tags: string[];
    note?: string;
    progress: number;
}

const Card: React.FC<CardProps> = ({ variant, title, tags, note }) => {
    const getGradient = () => {
        switch (variant) {
            case 'blue':
                return 'from-blue-100 to-blue-200';
            case 'purple':
                return 'from-purple-100 to-purple-200';
            case 'orange':
                return 'from-orange-100 to-orange-200';
            case 'green':
                return 'from-green-100 to-green-200';
            case 'red':
                return 'from-red-100 to-red-200';
            default:
                return 'from-gray-100 to-gray-200';
        }
    };

    const getTextColor = () => {
        switch (variant) {
            case 'blue':
                return 'text-blue-600';
            case 'purple':
                return 'text-purple-600';
            case 'orange':
                return 'text-orange-600';
            case 'green':
                return 'text-green-600';
            case 'red':
                return 'text-red-600';
            default:
                return 'text-gray-600';
        }
    };

    const getTagBgColor = () => {
        switch (variant) {
            case 'blue':
                return 'bg-blue-50 border-blue-200';
            case 'purple':
                return 'bg-purple-50 border-purple-200';
            case 'orange':
                return 'bg-orange-50 border-orange-200';
            case 'green':
                return 'bg-green-50 border-green-200';
            case 'red':
                return 'bg-red-50 border-red-200';
            default:
                return 'bg-gray-50 border-gray-200';
        }
    };

    return (
        <div className={`w-64 p-4 rounded-lg bg-gradient-to-br ${getGradient()} shadow-md`}>
            <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`px-2 py-0.5 text-xs font-medium ${getTextColor()} ${getTagBgColor()} border rounded-md`}
                        >
              #{tag}
            </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="mt-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                {note && <p className="text-sm text-gray-600 mt-2">{note}</p>}
            </div>

        </div>
    );
};

export default Card;