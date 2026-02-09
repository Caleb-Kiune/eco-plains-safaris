// src/components/common/SkeletonCard.jsx
import React from 'react';
import './SafariCard.css'; // Import base card styles for layout alignment
import './SkeletonCard.css'; // Import skeleton specific styles

const SkeletonCard = ({ variant = 'grid' }) => {
    return (
        <div className={`skeleton-card skeleton-card--${variant}`}>
            {/* Image Skeleton */}
            <div className="skeleton-card__image"></div>

            {/* Content Skeleton */}
            <div className="skeleton-card__content">
                {/* Header: Destination & Duration */}
                <div className="skeleton skeleton__text skeleton__text--header"></div>

                {/* Title */}
                <div className="skeleton skeleton__text skeleton__text--title"></div>

                {/* Footer / Price Area */}
                <div className="skeleton__footer">
                    <div className="skeleton skeleton__text skeleton__text--price-label"></div>
                    <div className="skeleton skeleton__text skeleton__text--price"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;
