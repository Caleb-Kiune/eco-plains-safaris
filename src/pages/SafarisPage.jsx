// app/safaris/page.jsx
import HeroSection from "@/components/safaris/HeroSection";
import FilterBar from "@/components/safaris/FilterBar";
import SafariGrid from "@/components/safaris/SafariGrid";
import FeaturedExperiences from "@/components/safaris/FeaturedExperiences";
import WhyTravelWithUs from "@/components/safaris/WhyTravelWithUs";
import Testimonials from "@/components/safaris/Testimonials";
import FinalCTA from "@/components/safaris/FinalCTA";

export const metadata = {
  title: "Safaris & Destinations | Eco Plains Safaris",
  description: "Discover Kenya's finest wildlife experiences and luxury safari destinations.",
};

export default function SafarisPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Filter & Search Bar */}
      <FilterBar />

      {/* Main Safari Packages Grid */}
      <SafariGrid />

      {/* Curated / Featured Experiences */}
      <FeaturedExperiences />

      {/* Why Choose Eco Plains */}
      <WhyTravelWithUs />

      {/* Guest Testimonials */}
      <Testimonials />

      {/* Final Call to Action */}
      <FinalCTA />
    </>
  );
}