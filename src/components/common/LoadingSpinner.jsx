import React from 'react';

const LoadingSpinner = () => (
    <div className="loading-spinner">
        <style jsx>{`
      .loading-spinner {
        width: 40px;
        height: 40px;
        border: 3px solid rgba(193, 127, 89, 0.2);
        border-radius: 50%;
        border-top-color: #C17F59;
        animation: spin 1s ease-in-out infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
    </div>
);

export default LoadingSpinner;
