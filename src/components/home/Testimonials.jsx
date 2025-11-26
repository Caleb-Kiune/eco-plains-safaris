// src/components/home/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        quote: "The silence of the Mara at dawn... it changes you. Jackson, our guide, knew every turn of the land. I have never felt more at home.",
        author: "Wanjiru K.",
        location: "Nairobi, Kenya",
        rating: 5
    },
    {
        id: 2,
        quote: "A flawless experience from start to finish. The luxury is in the details, but the heart is in the people.",
        author: "Emma L.",
        location: "London, UK",
        rating: 5
    },
    {
        id: 3,
        quote: "We wanted our children to see the real Kenya. Eco Plains delivered magic. Seeing the elephants with Sammy was a gift we will cherish forever.",
        author: "David M.",
        location: "Mombasa, Kenya",
        rating: 5
    },
    {
        id: 4,
        quote: "I thought I knew my country, but this safari opened my eyes. The conservation work they do is inspiring. Asante sana.",
        author: "Fatuma A.",
        location: "Lamu, Kenya",
        rating: 5
    },
    {
        id: 5,
        quote: "Beyond expectations. The lodges were exquisite, but it was the stories around the campfire that stole my heart.",
        author: "James R.",
        location: "New York, USA",
        rating: 5
    },
    {
        id: 6,
        quote: "Leah found the leopards when no one else could. A truly expert team that treats you like family, not just guests.",
        author: "Kamau N.",
        location: "Naivasha, Kenya",
        rating: 5
    },
    {
        id: 7,
        quote: "Peaceful, wild, and deeply moving. Every sunset was a painting. I am already planning my return.",
        author: "Zainab O.",
        location: "Kisumu, Kenya",
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
