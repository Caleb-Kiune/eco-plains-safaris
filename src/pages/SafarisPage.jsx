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

// Region Mapping for broader filtering
const REGION_MAPPING = {
  'Asia': ['Thailand', 'United Arab Emirates', 'China', 'Japan', 'India', 'Vietnam'],
  // Add other regions as needed
};

// Helper: extract number from duration string (moved outside for performance)
const getDurationDays = (safari) => {
  if (typeof safari.durationDays === 'number') return safari.durationDays;
  const duration = safari.duration;
  if (!duration) return 0;

  const daysMatch = duration.match(/(\d+)\s*Days?/i);
  if (daysMatch) return parseInt(daysMatch[1]);

  const nightsMatch = duration.match(/(\d+)\s*Nights?/i);
  if (nightsMatch) return parseInt(nightsMatch[1]) + 1;

  const match = duration.match(/\d+/);
  return match ? parseInt(match[0]) : 0;
};

export default function SafarisPage() {
  const { safaris, loading } = useSafaris();

  // ... imports and other state ...
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

  const filteredSafaris = useMemo(() => {
    return safaris.filter(safari => {
      // Country Filter
      const matchesCountry = !filters.country ||
        (safari.country && (
          safari.country.includes(filters.country) ||
          (REGION_MAPPING[filters.country] && REGION_MAPPING[filters.country].some(c => safari.country.includes(c)))
        ));

      // Category Filter
      const matchesCategory = !filters.category ||
        safari.category === filters.category;

      // Duration Filter
      const matchesDuration = !filters.duration || (() => {
        const [min, max] = filters.duration.split('-').map(Number);
        const days = getDurationDays(safari);
        return days >= min && days <= max;
      })();

      // Price Filter
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
            <div className="skeleton" style={{ width: '100%', maxWidth: '900px', height: '50px', margin: '0 auto 2rem', borderRadius: '4px' }}></div>
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
        <meta property="og:image" content="https://res.cloudinary.com/dy082ykuf/image/upload/v1769593463/eco-plains-safaris/meta/og_safaris.jpg" />
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