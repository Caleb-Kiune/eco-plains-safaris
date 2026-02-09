// src/components/common/SkeletonHero.jsx
import React from 'react';
import '../../pages/SafariDetailsPage.css'; // Re-use page styles
import './SkeletonCard.css'; // Re-use skeleton styles

const SkeletonHero = () => {
    return (
        <div className="safari-details-page">
            <div className="safari-split-layout">
                {/* LEFT COLUMN SKELETON */}
                <div className="safari-split-left" style={{ backgroundColor: '#0F1A17' }}>
                    <div className="skeleton" style={{ width: '100%', height: '100%' }}></div>
                </div>

                {/* RIGHT COLUMN SKELETON */}
                <div className="safari-split-right">
                    <div className="safari-content-container">
                        {/* Price */}
                        <div className="safari-price">
                            <div className="skeleton" style={{ width: '60%', height: '3rem' }}></div>
                        </div>

                        {/* Meta */}
                        <div className="safari-meta" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <div className="skeleton" style={{ width: '100px', height: '1.2rem' }}></div>
                            <div className="skeleton" style={{ width: '120px', height: '1.2rem' }}></div>
                        </div>

                        {/* Highlights */}
                        <div className="safari-highlights" style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <div className="skeleton" style={{ width: '140px', height: '2rem', borderRadius: '20px' }}></div>
                            <div className="skeleton" style={{ width: '140px', height: '2rem', borderRadius: '20px' }}></div>
                            <div className="skeleton" style={{ width: '140px', height: '2rem', borderRadius: '20px' }}></div>
                        </div>

                        {/* Description */}
                        <div className="safari-description" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <div className="skeleton" style={{ width: '100%', height: '1rem' }}></div>
                            <div className="skeleton" style={{ width: '100%', height: '1rem' }}></div>
                            <div className="skeleton" style={{ width: '90%', height: '1rem' }}></div>
                            <div className="skeleton" style={{ width: '80%', height: '1rem' }}></div>
                        </div>

                        {/* Actions */}
                        <div className="safari-actions" style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
                            <div className="skeleton" style={{ width: '150px', height: '50px' }}></div>
                            <div className="skeleton" style={{ width: '180px', height: '50px' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonHero;
