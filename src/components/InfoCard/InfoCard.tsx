// src/components/InfoCard/InfoCard.tsx
import React, {useState} from 'react';
import {AlertCircle, CheckCircle2, Info, Flame, Plus, Minus, LucideIcon} from 'lucide-react';


type Accent = 'success' | 'danger' | 'info' | 'warning';

interface InfoCardProps {
    title: string;
    body: string;
    variant: Accent;
}

interface VariantConfig {
    containerClass: string;
    headerClass: string;
    bodyClass: string;
    iconClass: string;
    titleClass: string;
    textClass: string;
    Icon: LucideIcon;
}

const InfoCard: React.FC<InfoCardProps> = ({title, body, variant}) => {

    const [isExpanded, setIsExpanded] = useState(true);

    const variants: Record<string, VariantConfig> = {
        success: {
            containerClass: 'border-emerald-400',
            headerClass: 'bg-emerald-100',
            bodyClass: 'bg-emerald-50',
            iconClass: 'text-emerald-500',
            titleClass: 'text-emerald-900',
            textClass: 'text-emerald-800',
            Icon: CheckCircle2
        },
        info: {
            containerClass: 'border-cyan-400',
            headerClass: 'bg-cyan-100',
            bodyClass: 'bg-cyan-50',
            iconClass: 'text-cyan-500',
            titleClass: 'text-cyan-900',
            textClass: 'text-cyan-800',
            Icon: Info
        },
        warning: {
            containerClass: 'border-orange-400',
            headerClass: 'bg-orange-100',
            bodyClass: 'bg-orange-50',
            iconClass: 'text-orange-500',
            titleClass: 'text-orange-900',
            textClass: 'text-orange-800',
            Icon: Flame
        },
        danger: {
            containerClass: 'border-rose-400',
            headerClass: 'bg-rose-100',
            bodyClass: 'bg-rose-50',
            iconClass: 'text-rose-500',
            titleClass: 'text-rose-900',
            textClass: 'text-rose-800',
            Icon: AlertCircle
        }
    };

    const {
        containerClass,
        headerClass,
        bodyClass,
        iconClass,
        titleClass,
        textClass,
        Icon
    } = variants[variant];

    return (
        <div className={`rounded shadow-sm border-l-4 w-full ${containerClass}`}>
            <div className={`flex items-center justify-between p-3 ${headerClass}`}>
                <div className="flex items-center gap-3">
                    <div className={`${iconClass}`}>
                        <Icon size={20} className="drop-shadow-sm"/>
                    </div>
                    {title && (
                        <h3 className={`text-md font-semibold  ${titleClass}`}>
                            {title}
                        </h3>
                    )}
                </div>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`${iconClass} hover:opacity-70 transition-opacity`}
                >
                    {isExpanded ? <Minus size={20}/> : <Plus size={20}/>}
                </button>
            </div>
            {isExpanded && (
                <div className={`p-4 text-sm ${bodyClass} ${textClass}`}>
                    {body}
                </div>
            )}
        </div>
    );
};

export default InfoCard;