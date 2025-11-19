// src/pages/SafarisPage.jsx
import { useState, useEffect } from "react";
import HeroSection from "../components/safaris/HeroSection";
import FilterBar from "../components/safaris/FilterBar";
import SafariGrid from "../components/safaris/SafariGrid";

export default function SafarisPage() {
  const [safaris, setSafaris] = useState([]);
  const [loading, setLoading] = useState(true);    
  const [error, setError] = useState(null);      

  useEffect(() => {
    const loadSafaris = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data/safaris.json");

        if (!response.ok) {
          throw new Error("Failed to load safaris");
        }

        const data = await response.json();
        setSafaris(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadSafaris();
  }, []);

  
  if (loading) return <div className="loading">Loading safaris...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      <HeroSection />
      <FilterBar />
      <SafariGrid safaris={safaris} />
    </>
  );
}