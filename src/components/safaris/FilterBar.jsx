// src/components/safaris/FilterBar.jsx
import React from "react";
import "./FilterBar.css";

export default function FilterBar({ safaris, filters, setFilters }) {
  const countries = [...new Set(safaris.flatMap(s => s.country.split(" & ")))];
  const experiences = [...new Set(safaris.flatMap(s => s.experiences))];

  return (
    <div className="filter-bar">
      <div className="filter-bar__inner">
        {/* Country */}
        <select
          value={filters.country}
          onChange={(e) => setFilters({ ...filters, country: e.target.value })}
        >
          <option value="">All Countries</option>
          {countries.sort().map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        {/* Duration */}
        <select
          value={filters.duration}
          onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
        >
          <option value="">Any Duration</option>
          <option value="7">Up to 7 days</option>
          <option value="10">Up to 10 days</option>
          <option value="15">10+ days</option>
        </select>

        {/* Price Range */}
        <div className="price-range">
          <label>Price: ${filters.priceRange[0].toLocaleString()} – ${filters.priceRange[1].toLocaleString()}</label>
          <input
            type="range"
            min="0"
            max="20000"
            step="1000"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters({ ...filters, priceRange: [0, +e.target.value] })}
          />
        </div>

        {/* Experience */}
        <select
          value={filters.experience}
          onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
        >
          <option value="">All Experiences</option>
          {experiences.sort().map(exp => (
            <option key={exp} value={exp}>{exp}</option>
          ))}
        </select>

        <button onClick={() => setFilters({ country: "", duration: "", priceRange: [0, 20000], experience: "" })}>
          Clear Filters
        </button>
      </div>
    </div>
  );
}