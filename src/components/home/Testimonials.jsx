// src/components/home/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        quote: "An absolutely transcendent experience. Every moment felt curated for wonder.",
        author: "Sarah Mitchell",
        location: "London, UK",
        rating: 5
    },
    {
        id: 2,
        quote: "The attention to detail was extraordinary. This is luxury redefined.",
        author: "James Chen",
        location: "Singapore",
        rating: 5
    },
    {
        id: 3,
        quote: "We've traveled the world, but nothing compares to this journey.",
        author: "Isabella Rodriguez",
        location: "Barcelona, Spain",
        rating: 5
    },
    {
        id: 4,
        quote: "Eco Plains doesn't just show you Africa—they make you feel it.",
        author: "Michael Okonkwo",
        location: "Lagos, Nigeria",
        rating: 5
    },
    {
        id: 5,
        quote: "Impeccable service, breathtaking moments, memories for a lifetime.",
        author: "Emma Thompson",
        location: "New York, USA",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="testimonials" aria-label="Client testimonials">
            <div className="testimonials__container">
                <h2 className="testimonials__title">Cherished by Explorers Worldwide</h2>

                <div className="testimonials__marquee-wrapper">
                    <div className="testimonials__marquee">
                        {/* Duplicate testimonials for infinite loop */}
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div key={`${testimonial.id}-${index}`} className="testimonial-card">
                                <div className="testimonial-card__stars" aria-label={`${testimonial.rating} stars`}>
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} viewBox="0 0 24 24" className="testimonial-card__star">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>

                                <blockquote className="testimonial-card__quote">
                                    "{testimonial.quote}"
                                </blockquote>

                                <footer className="testimonial-card__footer">
                                    <cite className="testimonial-card__author">{testimonial.author}</cite>
                                    <span className="testimonial-card__location">{testimonial.location}</span>
                                </footer>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
