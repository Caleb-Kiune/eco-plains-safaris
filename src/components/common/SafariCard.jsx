// src/components/common/SafariCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './SafariCard.css';
import OptimizedImage from './OptimizedImage';

export default function SafariCard({
    safari,
    index,
    variant = 'grid', // 'grid' | 'carousel'
    priority = false
}) {
    const [isActive, setIsActive] = useState(false);

    // Format price helper
    const formatPrice = (price, currency) => {
        if (!price) return null;
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency || 'USD',
            maximumFractionDigits: 0
        }).format(price);
    };

    const price = safari.price_adult || safari.price_couple;
    const formattedPrice = formatPrice(price, safari.currency);
    const priceLabel = safari.price_couple ? 'Per Couple' : 'Per Person';

    const handleCardClick = (e) => {
        // Check if the device is touch-enabled
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (isTouchDevice) {
            // If not already active, prevent navigation and activate
            if (!isActive) {
                e.preventDefault();
                setIsActive(true);
            }
            // If already active, let the link work (navigate)
        }
        // On desktop: Link works normally
    };

    // Reset active state on mouse leave (for hybrid devices)
    const handleMouseLeave = () => {
        setIsActive(false);
    };

    // Optimization: Disable entry animations in carousel to prevent re-renders during drag
    const isCarousel = variant === 'carousel';
    const animationProps = isCarousel ? {
        initial: false,
        whileInView: false,
        viewport: undefined,
        transition: undefined
    } : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: 0.6, delay: index * 0.05 }
    };

    return (
        <motion.article
            className={`safari-card safari-card--${variant} ${isActive ? 'active' : ''}`}
            {...animationProps}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                to={`/safaris/${safari.slug}`}
                className="safari-card__link"
                onClick={handleCardClick}
            >
                <div className="safari-card__image-wrapper">
                    <OptimizedImage
                        src={safari.primaryImage}
                        alt={safari.title}
                        className="safari-card__image"
                        priority={priority}
                        width={400} // Approximate width to help aspect ratio logic if we added it, 
                        // though explicit aspect-ratio CSS is better.
                        // For now this passes to img to guide browser layout.
                        height={300}
                    />
                    <div className="safari-card__overlay" />

                    {/* Duration Badge */}
                    <span className="safari-card__badge">{safari.duration}</span>
                </div>

                <div className="safari-card__content">
                    <div className="safari-card__header">
                        <span className="safari-card__destination">{safari.destination}</span>
                    </div>

                    <h3 className="safari-card__title">{safari.title}</h3>

                    {/* Reveal on Hover/Active Content */}
                    <div className="safari-card__reveal">
                        <div className="safari-card__divider" />

                        {formattedPrice && (
                            <div className="safari-card__price-block">
                                <span className="safari-card__price-label">From</span>
                                <span className="safari-card__price">{formattedPrice}</span>
                                <span className="safari-card__price-sub">{priceLabel}</span>
                            </div>
                        )}

                        <span className="safari-card__cta">Explore Journey</span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
