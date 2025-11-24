// src/components/safaris/PopularDestinations.jsx 
import React from "react";
import { Link } from "react-router-dom";
import "./PopularDestinations.css";

export default function PopularDestinations({ destinations = [] }) {
  if (!destinations || destinations.length === 0) return null;

  return (
    <section className="popular-destinations" aria-labelledby="popular-title">
      <h2 id="popular-title" className="popular-destinations__title">
        Destinations
      </h2>

      <div className="popular-destinations__grid">
        {destinations.slice(0, 6).map((dest) => {
          const slug = dest.link?.replace("/safaris/", "") || dest.id;

          return (
            <Link
              key={dest.id}
              to={`/safaris/${slug}`}
              className="popular-destinations__card"
              aria-label={`Explore ${dest.title}`}
            >
              <img
                src={dest.image}
                alt={dest.title}
                className="popular-destinations__image"
                loading="lazy"
              />
              <div className="popular-destinations__overlay" />

              <div className="popular-destinations__content">
                <h3 className="popular-destinations__name">{dest.title}</h3>
                <span className="popular-destinations__explore">Discover</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}