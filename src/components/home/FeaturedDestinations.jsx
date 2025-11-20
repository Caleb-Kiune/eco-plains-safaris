// src/components/home/FeaturedDestinations.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FeaturedDestinations.css";

export default function FeaturedDestinations() {
  const [destinations, setDestinations] = useState([]);
  const navigate = useNavigate();

  // Fetch the JSON file safely
  useEffect(() => {
    const loadDestinations = async () => {
      try {
        const res = await fetch("/data/destinations.json");
        const data = await res.json();
        setDestinations(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to load destinations:", err);
        setDestinations([]);
      }
    };
    loadDestinations();
  }, []);

  const handleClick = (country) => {
    if (!country) return;
    navigate(`/safaris?country=${encodeURIComponent(country)}`);
  };

  return (
    <section className="destinations-section">
      <div className="destinations-container">
        <h2 className="destinations-headline">Featured Destinations</h2>

        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <article
              key={dest.name || index}
              className="destination-card"
              role="button"
              tabIndex={0}
              style={{ animationDelay: `${index * 0.15}s`, cursor: "pointer" }}
              onClick={() => handleClick(dest.name)}
              onKeyPress={(e) => e.key === "Enter" && handleClick(dest.name)}
            >
              <div className="card-image-wrapper">
                <img
                  src={dest.image || "/fallback-image.jpg"}
                  alt={dest.name || "Safari Destination"}
                  className="card-image"
                  loading="lazy"
                />
                <div className="card-overlay"></div>
                <div className="card-content">
                  <h3 className="card-title">{dest.name}</h3>
                  <span className="card-explore">Explore</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
