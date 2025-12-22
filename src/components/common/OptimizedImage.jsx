import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './OptimizedImage.css';

/**
 * A wrapper around the <img> tag that enforces best practices:
 * - Lazy loading by default (unless priority=true)
 * - Decoding=async by default
 * - Blur-up / Skeleton loading state
 * - Explicit width/height to prevent CLS
 */
const OptimizedImage = ({
    src,
    alt,
    width,
    height,
    className = "",
    style = {},
    priority = false, // Set true for LCP images (above the fold)
    onLoad,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = (e) => {
        setIsLoaded(true);
        if (onLoad) onLoad(e);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true); // Stop showing skeleton
    };

    // If no width/height provided, we can't enforce aspect ratio container efficiently
    // without knowing image dimensions beforehand, but we still handle loading state.

    return (
        <div
            className={`optimized-image-wrapper ${className}`}
            style={{ ...style, position: 'relative', overflow: 'hidden' }}
        >
            {!isLoaded && (
                <div className="optimized-image-skeleton" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                    <Skeleton
                        height="100%"
                        width="100%"
                        style={{ display: 'block', height: '100%', borderRadius: 'inherit' }}
                        baseColor="#f0f0f0"
                        highlightColor="#f8f8f8"
                    />
                </div>
            )}

            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading={priority ? "eager" : "lazy"}
                fetchPriority={priority ? "high" : "auto"}
                decoding={priority ? "sync" : "async"}
                onLoad={handleLoad}
                onError={handleError}
                className={`optimized-image ${isLoaded ? 'is-loaded' : ''} ${hasError ? 'has-error' : ''}`}
                style={{
                    opacity: isLoaded && !hasError ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover' // Default to cover, can be overridden by className
                }}
                {...props}
            />
            {hasError && (
                <div className="optimized-image-error" style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f5f5f5',
                    color: '#999',
                    fontSize: '0.8rem'
                }}>
                    <span>Image unavailable</span>
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;
