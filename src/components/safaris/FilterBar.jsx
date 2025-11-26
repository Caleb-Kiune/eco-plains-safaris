// src/components/safaris/FilterBar.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FilterBar.css';

export default function FilterBar({ safaris, filters, setFilters }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Extract unique countries from the new 'country' field
  // Handles comma-separated values like "Botswana, Zimbabwe"
  const countries = [...new Set(
    safaris.flatMap(s =>
      s.country ? s.country.split(',').map(c => c.trim()) : []
    )
  )].sort();

  const categories = [...new Set(safaris.map(s => s.category))].sort();

  const durations = [
    { label: 'Short (1-3 days)', value: '3' },
    { label: 'Week (4-7 days)', value: '7' },
    { label: 'Extended (8-10 days)', value: '10' },
    { label: 'Epic (10+ days)', value: '99' }
  ];

  const priceRanges = [
    { label: 'Budget ($0-$2k)', min: 0, max: 2000 },
    { label: 'Mid ($2k-$5k)', min: 2000, max: 5000 },
    { label: 'Luxury ($5k-$10k)', min: 5000, max: 10000 },
    { label: 'Ultra ($10k+)', min: 10000, max: 1000000 }
  ];

  const isPriceRangeActive = (min, max) => {
    return filters.priceRange[0] === min && filters.priceRange[1] === max;
  };

  const hasActiveFilters =
    filters.country ||
    filters.category ||
    filters.duration ||
    (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 1000000);

  const clearFilters = () => {
    setFilters({
      country: '',
      category: '',
      duration: '',
      priceRange: [0, 1000000]
    });
  };

  return (
    <div className="filter-bar">
      <div className="filter-bar__container">
        {/* Mobile Toggle Button */}
        <button
          className="filter-bar__mobile-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle filters"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 4h16M2 10h10M2 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>Filters</span>
          {hasActiveFilters && <span className="filter-bar__badge">{
            [filters.country, filters.category, filters.duration].filter(Boolean).length
          }</span>}
        </button>

        {/* Desktop Filters (Always Visible) */}
        <div className={`filter-bar__content ${isMobileOpen ? 'filter-bar__content--open' : ''}`}>
          {/* Country Pills */}
          <div className="filter-group">
            <button
              className={`filter-pill ${!filters.country ? 'filter-pill--active' : ''}`}
              onClick={() => setFilters({ ...filters, country: '' })}
            >
              All Countries
            </button>
            {countries.slice(0, 5).map(country => (
              <button
                key={country}
                className={`filter-pill ${filters.country === country ? 'filter-pill--active' : ''}`}
                onClick={() => setFilters({ ...filters, country: country })}
              >
                {country}
              </button>
            ))}
          </div>

          {/* Category Pills */}
          <div className="filter-group">
            <button
              className={`filter-pill ${!filters.category ? 'filter-pill--active' : ''}`}
              onClick={() => setFilters({ ...filters, category: '' })}
            >
              All Types
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-pill ${filters.category === cat ? 'filter-pill--active' : ''}`}
                onClick={() => setFilters({ ...filters, category: cat })}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Duration Pills */}
          <div className="filter-group">
            <button
              className={`filter-pill ${!filters.duration ? 'filter-pill--active' : ''}`}
              onClick={() => setFilters({ ...filters, duration: '' })}
            >
              Any Duration
            </button>
            {durations.map(dur => (
              <button
                key={dur.value}
                className={`filter-pill ${filters.duration === dur.value ? 'filter-pill--active' : ''}`}
                onClick={() => setFilters({ ...filters, duration: dur.value })}
              >
                {dur.label}
              </button>
            ))}
          </div>

          {/* Price Range Pills */}
          <div className="filter-group">
            <span className="filter-group__label">Budget</span>
            {priceRanges.map(range => (
              <button
                key={range.label}
                className={`filter-pill ${isPriceRangeActive(range.min, range.max) ? 'filter-pill--active' : ''}`}
                onClick={() => setFilters({ ...filters, priceRange: [range.min, range.max] })}
              >
                {range.label}
              </button>
            ))}
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <motion.button
              className="filter-bar__clear"
              onClick={clearFilters}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              Clear All
            </motion.button>
          )}
        </div>

        {/* Mobile Overlay */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              className="filter-bar__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}