// src/components/safaris/SafariGrid.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import SafariCard from '../common/SafariCard';
import './SafariGrid.css';

const SAFARIS_PER_PAGE = 12;

const SafariGrid = ({ safaris }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const gridRef = useRef(null);

  // Elegant loading shimmer state
  const [isChangingPage, setIsChangingPage] = useState(false);

  // Read current page from URL query param, default to 1
  const currentPage = parseInt(searchParams.get('page')) || 1;

  // Calculate total pages and current page slice
  const totalPages = Math.ceil(safaris.length / SAFARIS_PER_PAGE);
  const startIndex = (currentPage - 1) * SAFARIS_PER_PAGE;
  const endIndex = startIndex + SAFARIS_PER_PAGE;
  const currentSafaris = safaris.slice(startIndex, endIndex);

  // Validate current page - redirect to page 1 if invalid
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      navigate(`/safaris?page=1`, { replace: true });
    }
  }, [currentPage, totalPages, navigate]);

  // Handle page change with intentional 400ms shimmer
  const handlePageChange = (newPage) => {
    if (newPage === currentPage || newPage < 1 || newPage > totalPages) return;

    // Trigger elegant skeleton shimmer
    setIsChangingPage(true);

    // Update URL cleanly
    navigate(`/safaris?page=${newPage}`);

    // Smooth scroll to top of grid with subtle offset
    if (gridRef.current) {
      const offset = 100;
      const elementPosition = gridRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Remove shimmer after 400ms - feels intentional and premium
    setTimeout(() => {
      setIsChangingPage(false);
    }, 400);
  };

  // Generate page numbers with intelligent ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      // Show all pages when total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Smart ellipsis logic for many pages
      if (currentPage <= 4) {
        // Near start: 1 2 3 4 5 … 18
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push('ellipsis-end');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Near end: 1 … 14 15 16 17 18
        pages.push(1);
        pages.push('ellipsis-start');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        // Middle: 1 … 8 9 10 … 18
        pages.push(1);
        pages.push('ellipsis-start');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('ellipsis-end');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <section id="safaris-grid" className="safari-grid" ref={gridRef}>
      <div className="safari-grid__container">
        {/* Safari Cards Grid */}
        <div className={`safari-grid__grid ${isChangingPage ? 'safari-grid__grid--loading' : ''}`}>
          {currentSafaris.map((safari, index) => (
            <SafariCard
              key={`${safari.id || safari.slug}-${currentPage}`}
              safari={safari}
              index={index}
              variant="grid"
              priority={index < 6}
            />
          ))}
        </div>

        {/* Pagination (only show if more than 1 page) */}
        {totalPages > 1 && (
          <nav className="safari-grid__pagination" aria-label="Safari pagination">
            {/* Previous Button */}
            <button
              className="safari-grid__page-btn safari-grid__page-btn--prev"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              ←
            </button>

            {/* Page Numbers */}
            {pageNumbers.map((pageNum, index) => {
              if (pageNum === 'ellipsis-start' || pageNum === 'ellipsis-end') {
                return (
                  <span key={`ellipsis-${index}`} className="safari-grid__ellipsis" aria-hidden="true">
                    …
                  </span>
                );
              }

              return (
                <button
                  key={pageNum}
                  className={`safari-grid__page-btn ${currentPage === pageNum ? 'safari-grid__page-btn--active' : ''}`}
                  onClick={() => handlePageChange(pageNum)}
                  aria-label={`Page ${pageNum}`}
                  aria-current={currentPage === pageNum ? 'page' : undefined}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              className="safari-grid__page-btn safari-grid__page-btn--next"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              →
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

export default SafariGrid;