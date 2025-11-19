// src/pages/SafarisPage.jsx
import { useState, useEffect, useMemo } from "react";
import HeroSection from "../components/safaris/HeroSection";
import FilterBar from "../components/safaris/FilterBar";
import SafariGrid from "../components/safaris/SafariGrid";

export default function SafarisPage() {
  const [safaris, setSafaris] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    country: "",
    duration: "",
    priceRange: [0, 20000],
    experience: ""
  });

  useEffect(() => {
    const loadSafaris = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data/safaris.json");
        const data = await res.json();
        setSafaris(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadSafaris();
  }, []);

  
  const filteredSafaris = useMemo(() => {
    return safaris.filter((safari) => {
      const matchesCountry = !filters.country || safari.country.includes(filters.country);
      const matchesDuration = !filters.duration || safari.durationDays <= parseInt(filters.duration);
      const matchesPrice = safari.price >= filters.priceRange[0] && safari.price <= filters.priceRange[1];
      const matchesExperience = !filters.experience || safari.experiences.includes(filters.experience);

      return matchesCountry && matchesDuration && matchesPrice && matchesExperience;
    });
  }, [safaris, filters]);

  if (loading) return <div className="loading">Loading safaris...</div>;

  return (
    <>
      <HeroSection />
      <FilterBar safaris={safaris} filters={filters} setFilters={setFilters} />
      <SafariGrid safaris={filteredSafaris} />
    </>
  );
}