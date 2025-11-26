import React, { useState, useEffect, useCallback } from 'react';
import './BigFiveHero.css';

const SLIDES = [
    {
        id: 1,
        image: '/images/lion.jpg',
        title: 'The Lion',
        subtitle: 'King of the Savannah'
    },
    {
        id: 2,
        image: '/images/leopard.jpg',
        title: 'The Leopard',
        subtitle: 'Silent Hunter'
    },
    {
        id: 3,
        image: '/images/elephant.jpg',
        title: 'The Elephant',
        subtitle: 'Gentle Giant'
    },
    {
        id: 4,
        image: '/images/rhino.jpg',
        title: 'The Rhino',
        subtitle: 'Ancient Warrior'
    },
    {
        id: 5,
        image: '/images/buffalo.jpg',
        title: 'The Buffalo',
        subtitle: 'Unstoppable Force'
    }
];

const AUTOPLAY_DURATION = 7000; // 7 seconds

export default function BigFiveHero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Preload images
    useEffect(() => {
        SLIDES.forEach(slide => {
            const img = new Image();
            img.src = slide.image;
        });
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % SLIDES.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex(prev => (prev - 1 + SLIDES.length) % SLIDES.length);
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
        // Optional: Resume after delay? For now, let's keep it simple and just pause interaction for a bit or permanently?
        // User requirement: "Smooth autoplay slideshow". Usually interaction pauses it temporarily.
        // Let's restart autoplay after 10s of inactivity if we wanted, but simple is better.
        // Actually, let's just reset the timer.
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <section className="big-five-hero" aria-label="Big 5 Safari Animals Slider">
            {SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`big-five-hero__slide ${index === currentIndex ? 'active' : ''}`}
                    aria-hidden={index !== currentIndex}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="big-five-hero__image"
                    />
                    <div className="big-five-hero__overlay" />

                    <div className="big-five-hero__content">
                        <div className="big-five-hero__subtitle">{slide.subtitle}</div>
                        <h2 className="big-five-hero__title">{slide.title}</h2>
                    </div>
                </div>
            ))}

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
