import React from 'react';
import SEO from "../components/common/SEO";
import SectionTitle from "../components/common/SectionTitle";

export default function PrivacyPage() {
    return (
        <>
            <SEO>
                <title>Privacy Policy - Eco Plains Safaris</title>
                <meta name="description" content="Privacy Policy for Eco Plains Safaris." />
            </SEO>
            <div className="container mx-auto px-6 py-20">
                <SectionTitle
                    subtitle="Legal"
                    title="Privacy Policy"
                />
                <div className="prose max-w-3xl mx-auto mt-8 font-sans text-gray-700">
                    <p>At Eco Plains Safaris, we prioritize your privacy and are committed to protecting your personal data.</p>
                    <h3>1. Information We Collect</h3>
                    <p>We may collect personal details such as your name, email address, phone number, and payment information when you book a safari or contact us.</p>
                    <h3>2. How We Use Your Information</h3>
                    <p>We use your information to process bookings, communicate with you regarding your trip, and improve our services.</p>
                    <h3>3. Data Protection</h3>
                    <p>We implement security measures to maintain the safety of your personal information.</p>
                    <p className="mt-8 italic text-sm">Last Updated: January 2026</p>
                </div>
            </div>
        </>
    );
}
