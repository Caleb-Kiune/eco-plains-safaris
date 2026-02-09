import React, { useState, useEffect, useCallback } from 'react';
import './BigFiveHero.css';

const SLIDES = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/dy082ykuf/image/upload/q_auto,f_auto,w_auto,dpr_auto/v1/eco-plains-safaris/lion',
        title: 'The Lion',
        subtitle: 'King of the Savannah'
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/dy082ykuf/image/upload/q_auto,f_auto,w_auto,dpr_auto/v1/eco-plains-safaris/leopard',
        title: 'The Leopard',
        subtitle: 'Silent Hunter'
    },
    {
        id: 3,
        image: 'https://res.cloudinary.com/dy082ykuf/image/upload/q_auto,f_auto,w_auto,dpr_auto/v1/eco-plains-safaris/elephant',
        title: 'The Elephant',
        subtitle: 'Gentle Giant'
    },
    {
        id: 4,
        image: 'https://res.cloudinary.com/dy082ykuf/image/upload/q_auto,f_auto,w_auto,dpr_auto/v1/eco-plains-safaris/rhino',
        title: 'The Rhino',
        subtitle: 'Ancient Warrior'
    },
    {
        id: 5,
        image: 'https://res.cloudinary.com/dy082ykuf/image/upload/q_auto,f_auto,w_auto,dpr_auto/v1/eco-plains-safaris/buffalo',
        title: 'The Buffalo',
        subtitle: 'Unstoppable Force'
    }
];

const AUTOPLAY_DURATION = 7000; // 7 seconds

export default function BigFiveHero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Preload images - Handled by native lazy loading and srcSet

    const nextSlide = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % SLIDES.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex(prev => (prev - 1 + SLIDES.length) % SLIDES.length);
    }, []);

    // ... (keeping existing Navbar height logic) ... 
    // Dynamic Navbar Height Calculation
    useEffect(() => {
        const updateNavbarHeight = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                const height = navbar.offsetHeight;
                document.documentElement.style.setProperty('--navbar-height', `${height}px`);
            }
        };

        updateNavbarHeight();
        window.addEventListener('resize', updateNavbarHeight);
        return () => window.removeEventListener('resize', updateNavbarHeight);
    }, []);

    // Autoplay logic
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(nextSlide, AUTOPLAY_DURATION);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    // Pause autoplay on interaction
    const handleInteraction = () => {
        setIsAutoPlaying(false);
        // Resume autoplay after 10s of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <section className="big-five-hero" aria-label="Big 5 Safari Animals Slider">
            {SLIDES.map((slide, index) => {
                const isFirst = index === 0;
                // Generate responsive srcSet
                const srcSet = `
                    ${slide.image.replace('/upload/', '/upload/w_600,q_auto,f_auto/')} 600w,
                    ${slide.image.replace('/upload/', '/upload/w_1000,q_auto,f_auto/')} 1000w,
                    ${slide.image.replace('/upload/', '/upload/w_1400,q_auto,f_auto/')} 1400w
                `;

                return (
                    <div
                        key={slide.id}
                        className={`big-five-hero__slide ${index === currentIndex ? 'active' : ''}`}
                        aria-hidden={index !== currentIndex}
                    >
                        <img
                            src={slide.image.replace('/upload/', '/upload/w_1400,q_auto,f_auto/')} // Fallback
                            srcSet={srcSet}
                            sizes="(max-width: 768px) 100vw, 100vw"
                            alt={slide.title}
                            className="big-five-hero__image"
                            loading={isFirst ? "eager" : "lazy"}
                            fetchPriority={isFirst ? "high" : "auto"}
                            width="1400"
                            height="800"
                        />
                        <div className="big-five-hero__overlay" />

                        <div className="big-five-hero__content">
                            <div className="big-five-hero__subtitle">{slide.subtitle}</div>
                            <h2 className="big-five-hero__title">{slide.title}</h2>
                        </div>
                    </div>
                );
            })}

            {/* Navigation Arrows */}
            <button
                className="big-five-hero__nav big-five-hero__nav--prev"
                onClick={() => {
                    prevSlide();
                    handleInteraction();
                }}
                aria-label="Previous slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                className="big-five-hero__nav big-five-hero__nav--next"
                onClick={() => {
                    nextSlide();
                    handleInteraction();
                }}
                aria-label="Next slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </section>
    );
}
