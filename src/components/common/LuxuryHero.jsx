// src/components/common/LuxuryHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './LuxuryHero.css';

export default function LuxuryHero({
    title,
    subtitle,
    backgroundImage,
    backgroundVideo,
    ctaText = "Discover More",
    ctaLink = "#",
    align = "left" // "left" or "center"
}) {
    return (
        <section className={`luxury-hero luxury-hero--${align}`}>
            {/* Background Media */}
            {backgroundVideo ? (
                <video
                    className="luxury-hero__video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster={backgroundImage}
                >
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : backgroundImage ? (
                <img
                    src={backgroundImage}
                    alt="Hero Background"
                    className="luxury-hero__image"
                    fetchPriority="high"
                    loading="eager"
                    decoding="sync"
                />
            ) : (
                <div className="luxury-hero__image luxury-hero__image--fallback" />
            )}

            {/* Subtle Radial Overlay */}
            <div className="luxury-hero__overlay" />

            {/* Content */}
            <div className="luxury-hero__content">
                <motion.h1
                    className="luxury-hero__title"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    style={{ willChange: 'transform' }}
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        className="luxury-hero__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        style={{ willChange: 'transform' }}
                    >
                        {subtitle}
                    </motion.p>
                )}

                {ctaText && ctaLink && (
                    <motion.a
                        href={ctaLink}
                        className="luxury-hero__cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ willChange: 'transform' }}
                    >
                        {ctaText}
                    </motion.a>
                )}
            </div>
        </section>
    );
}
