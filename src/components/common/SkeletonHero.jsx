import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../../pages/SafariDetailsPage.css'; // Re-use styles

const SkeletonHero = () => {
    return (
        <div className="safari-details-page">
            <div className="safari-split-layout">
                {/* LEFT COLUMN SKELETON */}
                <div className="safari-split-left" style={{ backgroundColor: '#f5f5f5' }}>
                    <Skeleton height="100%" containerClassName="h-full block" />
                </div>

                {/* RIGHT COLUMN SKELETON */}
                <div className="safari-split-right">
                    <div className="safari-content-container">
                        {/* Price */}
                        <h1 className="safari-price">
                            <Skeleton width={300} height={40} />
                        </h1>

                        {/* Meta */}
                        <div className="safari-meta" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <Skeleton width={100} />
                            <Skeleton width={120} />
                        </div>

                        {/* Highlights */}
                        <div className="safari-highlights" style={{ marginTop: '2rem' }}>
                            <Skeleton width={150} height={24} />
                            <Skeleton width={150} height={24} />
                            <Skeleton width={150} height={24} />
                            <Skeleton width={150} height={24} />
                        </div>

                        {/* Description */}
                        <div className="safari-description" style={{ marginTop: '2rem' }}>
                            <Skeleton count={5} />
                        </div>

                        {/* Actions */}
                        <div className="safari-actions" style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
                            <Skeleton width={140} height={50} />
                            <Skeleton width={160} height={50} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonHero;
