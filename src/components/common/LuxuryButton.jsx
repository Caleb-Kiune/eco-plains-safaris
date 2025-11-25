// src/components/common/LuxuryButton.jsx
import React from 'react';
import './LuxuryButton.css';

export default function LuxuryButton({
    children,
    variant = 'filled', // 'filled' or 'outline'
    href,
    onClick,
    className = '',
    type = 'button'
}) {
    const baseClass = `luxury-btn luxury-btn--${variant} ${className}`;

    if (href) {
        return (
            <a href={href} className={baseClass}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={baseClass}>
            {children}
        </button>
    );
}
