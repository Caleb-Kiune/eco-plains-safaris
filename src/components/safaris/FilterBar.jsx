// src/components/safaris/FilterBar.jsx
import React from "react";
import "./FilterBar.css";

export default function FilterBar({ safaris, filters, setFilters }) {
  // Extract unique destinations (handles "Zimbabwe & Botswana")
  const destinations = [...new Set(
    safaris.flatMap(s => 
      s.destination.split(" & ").map(d => d.trim())
    )
  )].sort();

  // Extract unique categories (e.g., "Wildlife Safari", "Beach Holiday")
  const categories = [...new Set(safaris.map(s => s.category))].sort();

  

  return (
    <div className="filter-bar">
      <div className="filter-bar__inner">
        {/* Destination */}
        <select
          value={filters.destination || ""}
          onChange={(e) => setFilters({ ...filters, destination: e.target.value })}
        >
          <option value="">All Destinations</option>
          {destinations.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        {/* Category */}
        <select
          value={filters.category || ""}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Duration */}
        <select
          value={filters.duration || ""}
          onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
        >
          <option value="">Any Duration</option>
          <option value="3">Up to 3 days</option>
          <option value="7">Up to 7 days</option>
          <option value="10">Up to 10 days</option>
          <option value="99">10+ days</option>
        </select>

        {/* Price Range */}
        <div className="price-range">
          <label>
            Price: ${filters.priceRange[0].toLocaleString()} – ${filters.priceRange[1].toLocaleString()}
          </label>
          <input
            type="range"
            min="0"
            max="20000"
            step="500"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters({ ...filters, priceRange: [0, +e.target.value] })}
          />
        </div>

        <button onClick={() => setFilters({
          destination: "",
          category: "",
          duration: "",
          priceRange: [0, 20000]
        })}>
          Clear Filters
        </button>
      </div>
    </div>
  );
}