import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './SafariCard.css'; // Re-use styles for layout

const SkeletonCard = () => {
    return (
        <div className="safari-card" style={{ border: '1px solid #eee' }}>
            {/* Image Skeleton */}
            <div className="safari-card__image-container">
                <Skeleton height="100%" style={{ display: 'block', height: '100%' }} />
            </div>

            {/* Content Skeleton */}
            <div className="safari-card__content">
                <div className="safari-card__meta">
                    <Skeleton width={80} />
                    <Skeleton width={60} />
                </div>

                <div className="safari-card__title">
                    <Skeleton count={2} />
                </div>

                <div className="safari-card__footer" style={{ marginTop: 'auto' }}>
                    <Skeleton width={100} height={30} />
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;
