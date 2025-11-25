// src/components/common/SectionDivider.jsx
import React from 'react';
import './SectionDivider.css';

export default function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <svg className="section-divider__wave" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 4 Q30 0, 60 4 T120 4"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}
