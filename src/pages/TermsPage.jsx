import React from 'react';
import SEO from "../components/common/SEO";
import SectionTitle from "../components/common/SectionTitle";

export default function TermsPage() {
    return (
        <>
            <SEO>
                <title>Terms of Service - Eco Plains Safaris</title>
                <meta name="description" content="Terms of Service for Eco Plains Safaris." />
            </SEO>
            <div className="container mx-auto px-6 py-20">
                <SectionTitle
                    subtitle="Legal"
                    title="Terms of Service"
                />
                <div className="prose max-w-3xl mx-auto mt-8 font-sans text-gray-700">
                    <p>Welcome to Eco Plains Safaris. By using our website and services, you agree to the following terms.</p>
                    <h3>1. Booking & Payments</h3>
                    <p>A deposit is required to secure your booking. Full payment must be made prior to the safari start date.</p>
                    <h3>2. Cancellations</h3>
                    <p>Cancellations made within certain timeframes may incur fees. Please refer to your booking confirmation for specific details.</p>
                    <h3>3. Liability</h3>
                    <p>Eco Plains Safaris is not liable for unforeseen circumstances such as flight delays, natural disasters, or personal injury during the trip, though we prioritize your safety.</p>
                    <p className="mt-8 italic text-sm">Last Updated: January 2026</p>
                </div>
            </div>
        </>
    );
}
