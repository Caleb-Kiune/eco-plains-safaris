import React, { useState } from 'react';
import './SkeletonCard.css'; // Import shared skeleton styles
import './OptimizedImage.css';
import './OptimizedImage.css';

/**
 * A wrapper around the <img> tag that enforces best practices:
 * - Lazy loading by default (unless priority=true)
 * - Decoding=async by default
 * - Blur-up / Skeleton loading state
 * - Explicit width/height to prevent CLS
 */
const getCloudinaryBlurUrl = (url) => {
    if (!url || !url.includes('cloudinary')) return null;
    // Use refined parameters for better quality/size balance
    // w_60,h_60,c_fill: Square-ish low-res base, preserves aspect better
    // e_blur:800: Strong but not extreme blur
    // q_auto:low, f_auto: Tiny file, modern format
    return url.replace('/upload/', '/upload/w_60,h_60,c_fill,e_blur:800,q_auto:low,f_auto/');
};

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

    const blurUrl = getCloudinaryBlurUrl(src);

    return (
        <div
            className={`optimized-image-wrapper ${className}`}
            style={{ ...style, position: 'relative', overflow: 'hidden' }}
        >
            {/* 1. Low-Res Blur Layer (Visible immediately) */}
            {blurUrl && (
                <img
                    src={blurUrl}
                    alt=""
                    role="presentation"
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: isLoaded ? 0 : 1,
                        transition: 'opacity 0.6s ease-out',
                        filter: 'blur(12px)', // Extra client-side softness
                        transform: 'scale(1.05)', // Prevent edge reveal
                        willChange: 'opacity, transform', // GPU hint
                        zIndex: 1
                    }}
                />
            )}

            {/* 2. Skeleton (Fallback if no blur URL available) */}
            {!isLoaded && !blurUrl && (
                <div className="optimized-image-skeleton" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                    <div className="skeleton" style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}></div>
                </div>
            )}

            {/* 3. High-Res Image */}
            {/* 3. High-Res Image with Responsive SrcSet */}
            <img
                src={src}
                srcSet={src && src.includes('cloudinary') ? `
                    ${src.replace('/upload/', '/upload/w_500,q_auto,f_auto/')} 500w,
                    ${src.replace('/upload/', '/upload/w_800,q_auto,f_auto/')} 800w,
                    ${src.replace('/upload/', '/upload/w_1200,q_auto,f_auto/')} 1200w
                ` : undefined}
                sizes={props.sizes || "(max-width: 768px) 100vw, 50vw"}
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
                    objectFit: 'cover', // Default to cover, can be overridden by className
                    position: 'relative',
                    zIndex: 2
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
                    backgroundColor: '#F9F8F4',
                    color: '#999',
                    fontSize: '0.8rem',
                    zIndex: 2
                }}>
                    <span>Image unavailable</span>
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;
