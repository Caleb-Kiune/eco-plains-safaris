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
    country: "",
    duration: "",
    priceRange: [0, 20000],
    experience: "",
  });

  // Read the URL query "?country=Kenya"
  const [searchParams] = useSearchParams();
  const urlCountry = searchParams.get("country");

  // Load safaris data
  useEffect(() => {
    const loadSafaris = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data/safaris.json");
        const data = await res.json();
        setSafaris(data);
      } catch (err) {
        console.error("Failed to load safaris:", err);
      } finally {
        setLoading(false);
      }
    };
    loadSafaris();
  }, []);

  // Apply URL filter after safaris load
  useEffect(() => {
    if (!safaris.length) return;

    if (urlCountry) {
      setFilters((prev) => ({
        ...prev,
        country: urlCountry,
      }));
    }
  }, [safaris, urlCountry]);

  // Popular destinations
  const popularDestinations = useMemo(() => {
    if (!safaris.length) return [];

    return safaris
      .filter((s) => s.image || s.images?.[0])
      .slice(0, 6)
      .map((s) => ({
        id: s.id,
        title: s.title || s.name,
        image: s.image || s.images?.[0],
        link: s.link || `/safaris/${s.slug || s.id}`,
      }));
  }, [safaris]);

  // Main filtering logic
  const filteredSafaris = useMemo(() => {
    return safaris.filter((safari) => {
      const matchesCountry =
        !filters.country || safari.country?.includes(filters.country);

      const matchesDuration =
        !filters.duration ||
        safari.durationDays <= parseInt(filters.duration);

      const matchesPrice =
        safari.price >= filters.priceRange[0] &&
        safari.price <= filters.priceRange[1];

      const matchesExperience =
        !filters.experience ||
        safari.experiences?.includes(filters.experience);

      return (
        matchesCountry &&
        matchesDuration &&
        matchesPrice &&
        matchesExperience
      );
    });
  }, [safaris, filters]);

  if (loading) {
    return <div className="loading">Curating exceptional safaris...</div>;
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
