// src/components/safaris/SafariGrid.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import SafariCard from './SafariCard';
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

  // Hide pagination completely when all safaris fit on one page
  const showPagination = totalPages > 1;

  return (
    <section className="safari-grid" ref={gridRef}>
      <div className="safari-grid__inner">
        {/* Elegant skeleton shimmer during page transitions */}
        {isChangingPage ? (
          <>
            <div className="safari-card-skeleton" aria-hidden="true"></div>
            <div className="safari-card-skeleton" aria-hidden="true"></div>
            <div className="safari-card-skeleton" aria-hidden="true"></div>
          </>
        ) : (
          // Safari cards with staggered fade-in animation (restarts on every page)
          currentSafaris.map((safari, index) => (
            <SafariCard
              key={safari.id || safari.slug}
              safari={safari}
              animationDelay={`${index * 0.1}s`}
            />
          ))
        )}
      </div>

      {/* Luxury minimal pagination - only shown when needed */}
      {showPagination && (
        <nav
          className="safari-pagination"
          role="navigation"
          aria-label="Safari pages navigation"
        >
          {/* Previous arrow */}
          <button
            className="safari-pagination__arrow safari-pagination__prev"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <span className="safari-pagination__arrow-symbol" aria-hidden="true">←</span>
            <span className="safari-pagination__arrow-text">Previous</span>
          </button>

          {/* Desktop: Page numbers with ellipsis */}
          <div className="safari-pagination__numbers">
            {pageNumbers.map((page, index) => {
              if (typeof page === 'string' && page.startsWith('ellipsis')) {
                return (
                  <span
                    key={page}
                    className="safari-pagination__ellipsis"
                    aria-hidden="true"
                  >
                    …
                  </span>
                );
              }

              return (
                <button
                  key={page}
                  className={`safari-pagination__number ${page === currentPage ? 'safari-pagination__number--active' : ''
                    }`}
                  onClick={() => handlePageChange(page)}
                  aria-label={`Page ${page}`}
                  aria-current={page === currentPage ? 'page' : undefined}
                >
                  {page}
                </button>
              );
            })}
          </div>

          {/* Mobile: Current/Total indicator */}
          <div className="safari-pagination__mobile-indicator">
            <span className="safari-pagination__mobile-current">{currentPage}</span>
            <span className="safari-pagination__mobile-divider">/</span>
            <span className="safari-pagination__mobile-total">{totalPages}</span>
          </div>

          {/* Next arrow */}
          <button
            className="safari-pagination__arrow safari-pagination__next"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <span className="safari-pagination__arrow-text">Next</span>
            <span className="safari-pagination__arrow-symbol" aria-hidden="true">→</span>
          </button>
        </nav>
      )}
    </section>
  );
};

export default SafariGrid;