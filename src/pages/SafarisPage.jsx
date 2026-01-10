// src/pages/SafarisPage.jsx
import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import SEO from "../components/common/SEO";
import useSafaris from "../hooks/useSafaris";
import SkeletonCard from "../components/common/SkeletonCard";

import BigFiveHero from "../components/safaris/BigFiveHero";
import FilterBar from "../components/safaris/FilterBar";
import SafariGrid from "../components/safaris/SafariGrid";
import SectionCTA from "../components/safaris/SectionCTA";
import BottomCTA from "../components/safaris/BottomCTA";

export default function SafarisPage() {
  const { safaris, loading } = useSafaris();

  const [filters, setFilters] = useState({
    country: "",
    category: "",
    duration: "",
    priceRange: [0, 1000000],
  });

  const [searchParams] = useSearchParams();
  const location = useLocation();
  const urlCountry = searchParams.get("country");
  const urlCategory = searchParams.get("category");

  // Scroll to grid if hash is present and loading is done
  useEffect(() => {
    if (!loading && location.hash === '#safaris-grid') {
      // Small timeout to ensure DOM layout is complete
      setTimeout(() => {
        const element = document.getElementById('safaris-grid');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [loading, location.hash]);

  // Apply URL filter
  useEffect(() => {
    if ((urlCountry || urlCategory) && safaris.length > 0) {
      setFilters(prev => ({
        ...prev,
        country: urlCountry || prev.country,
        category: urlCategory || prev.category
      }));
    }
  }, [urlCountry, urlCategory, safaris]);

  // Helper: extract number from duration string
  // Helper: extract number from duration string (Robust)
  const getDurationDays = (safari) => {
    // 1. Use pre-calculated field if available (Fastest & Most Accurate)
    if (typeof safari.durationDays === 'number') {
      return safari.durationDays;
    }

    const duration = safari.duration;
    if (!duration) return 0;

    // 2. Fallback Parsing
    // Match "X Days"
    const daysMatch = duration.match(/(\d+)\s*Days?/i);
    if (daysMatch) return parseInt(daysMatch[1]);

    // Match "X Nights" -> +1 logic
    const nightsMatch = duration.match(/(\d+)\s*Nights?/i);
    if (nightsMatch) return parseInt(nightsMatch[1]) + 1;

    // Last resort: any number
    const match = duration.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  const filteredSafaris = useMemo(() => {
    return safaris.filter(safari => {
      const matchesCountry = !filters.country ||
        (safari.country && safari.country.includes(filters.country));

      const matchesCategory = !filters.category ||
        safari.category === filters.category;

      const matchesDuration = !filters.duration || (() => {
        const [min, max] = filters.duration.split('-').map(Number);
        const days = getDurationDays(safari);
        return days >= min && days <= max;
      })();

      // Fix: Allow null prices and high values if using default range
      const isDefaultPrice = filters.priceRange[0] === 0 && filters.priceRange[1] === 1000000;
      const matchesPrice = isDefaultPrice || (
        safari.price_adult &&
        safari.price_adult >= filters.priceRange[0] &&
        safari.price_adult <= filters.priceRange[1]
      );

      return matchesCountry && matchesCategory && matchesDuration && matchesPrice;
    });
  }, [safaris, filters]);



  // Show skeleton loading state
  if (loading) {
    return (
      <>
        <SEO>
          <title>All Safaris - Eco Plains Safaris</title>
          <meta name="description" content="Explore our curated collection of luxury safari experiences across East Africa. Find your perfect adventure." />
          <meta property="og:title" content="All Safaris - Eco Plains Safaris" />
          <meta property="og:description" content="Curated luxury safari adventures across East Africa" />
          <meta property="og:image" content="/og-safaris.jpg" />
        </SEO>

        <div className="safaris-page">
          <BigFiveHero />
          {/* Skeleton Filter Bar (simplified) */}
          <div className="container mx-auto px-6 py-8">
            <div className="h-12 bg-gray-100 rounded mb-8 animate-pulse w-full max-w-4xl mx-auto"></div>
          </div>

          <div className="safaris-grid-section" id="safaris-grid">
            <div className="safaris-grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', padding: '0 1.5rem 4rem' }}>
              {[1, 2, 3, 4, 5, 6].map(i => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO>
        <title>All Safaris - Eco Plains Safaris</title>
        <meta name="description" content="Explore our curated collection of luxury safari experiences across East Africa. Find your perfect adventure." />
        <meta property="og:title" content="All Safaris - Eco Plains Safaris" />
        <meta property="og:description" content="Curated luxury safari adventures across East Africa" />
        <meta property="og:image" content="/og-safaris.jpg" />
      </SEO>

      <div className="safaris-page">
        <BigFiveHero />
        <FilterBar filters={filters} setFilters={setFilters} safaris={safaris} />
        <SafariGrid safaris={filteredSafaris} />
        <SectionCTA />
        <BottomCTA />
      </div>
    </>
  );
}