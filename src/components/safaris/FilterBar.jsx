// src/components/safaris/FilterBar.jsx
import { useState } from "react";
import "./FilterBar.css";

export default function FilterBar() {
  const [destination, setDestination] = useState("");
  const [experience, setExperience] = useState("");
  const [duration, setDuration] = useState("");
  const [priceRange, setPriceRange] = useState([500, 5000]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filters applied:", { destination, experience, duration, priceRange });
  };

  return (
    <section className="filter-bar-section">
      <div className="filter-bar-container">
        <form className="filter-bar" onSubmit={handleSubmit}>
          <div className="filter-group">
            <label htmlFor="destination" className="filter-label">Destination</label>
            <select id="destination" value={destination} onChange={(e)=>setDestination(e.target.value)} className="filter-select">
              <option value="">All Kenya</option>
              <option value="masai-mara">Masai Mara</option>
              <option value="amboseli">Amboseli</option>
              <option value="tsavo">Tsavo East & West</option>
              <option value="samburu">Samburu</option>
              <option value="laikipia">Laikipia Plateau</option>
              <option value="coast">Kenyan Coast</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="experience" className="filter-label">Experience</label>
            <select id="experience" value={experience} onChange={(e)=>setExperience(e.target.value)} className="filter-select">
              <option value="">Any Experience</option>
              <option value="luxury">Luxury</option>
              <option value="honeymoon">Honeymoon</option>
              <option value="family">Family</option>
              <option value="photography">Photography</option>
              <option value="budget">Classic / Budget</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="duration" className="filter-label">Duration</label>
            <select id="duration" value={duration} onChange={(e)=>setDuration(e.target.value)} className="filter-select">
              <option value="">Any Length</option>
              <option value="2-3">2–3 Days</option>
              <option value="4-7">4–7 Days</option>
              <option value="8+">8+ Days</option>
            </select>
          </div>

          <div className="filter-group price-range">
            <label className="filter-label">Price per person</label>
            <div className="price-display">${priceRange[0]} – ${priceRange[1].toLocaleString()}</div>
            <input type="range" min="300" max="10000" step="100" value={priceRange[1]} onChange={(e)=>setPriceRange([priceRange[0], +e.target.value])} className="price-slider"/>
          </div>

          <div className="filter-group button-group">
            <button type="submit" className="filter-apply-btn">Search Safaris</button>
          </div>
        </form>
      </div>
    </section>
  );
}
