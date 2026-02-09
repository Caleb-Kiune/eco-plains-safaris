import React from 'react';
import './PageLoader.css';

const PageLoader = () => {
    return (
        <div className="page-loader">
            {/* 1. Header Skeleton */}
            <div className="page-loader__header">
                <div className="page-loader__logo" />
                <div className="page-loader__nav">
                    <div className="page-loader__link" />
                    <div className="page-loader__link" />
                    <div className="page-loader__link" />
                    <div className="page-loader__link" />
                </div>
            </div>

            {/* 2. Hero Skeleton */}
            <div className="page-loader__hero">
                <div className="page-loader__content">
                    <div className="page-loader__title" />
                    <div className="page-loader__subtitle" />
                </div>
            </div>
        </div>
    );
};

export default PageLoader;
