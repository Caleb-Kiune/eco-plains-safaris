// src/pages/SafarisPage.jsx
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import HeroSection from "../components/safaris/HeroSection";
import FilterBar from "../components/safaris/FilterBar";
import SafariGrid from "../components/safaris/SafariGrid";
import PopularDestinations from "../components/safaris/PopularDestinations";
import SectionCTA from "../components/safaris/SectionCTA";
import BottomCTA from "../components/safaris/BottomCTA";

export default function SafarisPage() {
  const [safaris, setSafaris] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    destination: "",
    category: "",
    duration: "",
    priceRange: [0, 20000],
  });

  const [searchParams] = useSearchParams();
  const urlDestination = searchParams.get("destination");

  useEffect(() => {
    fetch("/data/safaris.json")
      .then(r => r.json())
      .then(data => {
        setSafaris(data.tours || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load safaris:", err);
        setLoading(false);
      });
  }, []);

  // Apply URL filter
  useEffect(() => {
    if (urlDestination && safaris.length > 0) {
      setFilters(prev => ({ ...prev, destination: urlDestination }));
    }
  }, [urlDestination, safaris]);

  // Helper: extract number from duration string
  const getDurationDays = (duration) => {
    const match = duration.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  const filteredSafaris = useMemo(() => {
    return safaris.filter(safari => {
      const matchesDestination = !filters.destination || 
        safari.destination.includes(filters.destination);

      const matchesCategory = !filters.category || 
        safari.category === filters.category;

      const matchesDuration = !filters.duration || 
        getDurationDays(safari.duration) <= parseInt(filters.duration);

      const matchesPrice = safari.price_adult && 
        safari.price_adult >= filters.priceRange[0] && 
        safari.price_adult <= filters.priceRange[1];

      return matchesDestination && matchesCategory && matchesDuration && matchesPrice;
    });
  }, [safaris, filters]);

  const popularDestinations = useMemo(() => {
    return safaris
      .filter(s => s.featured && s.primaryImage)
      .slice(0, 6)
      .map(s => ({
        id: s.id,
        title: s.title,
        image: s.primaryImage,
        link: `/safaris/${s.slug}`,
      }));
  }, [safaris]);

  if (loading) {
    return <div className="loading py-32 text-center text-2xl">Curating exceptional safaris...</div>;
  }

  return (
    <>
      <HeroSection />
      <FilterBar safaris={safaris} filters={filters} setFilters={setFilters} />
      <SafariGrid safaris={filteredSafaris} />
      <SectionCTA />
      <PopularDestinations destinations={popularDestinations} />
      <BottomCTA />
    </>
  );
}