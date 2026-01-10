// src/components/common/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, search, hash } = useLocation();

    useEffect(() => {
        // If there's a hash, scroll to it
        if (hash) {
            const elementId = hash.slice(1);
            if (elementId) {
                // Small timeout to allow layout to settle
                setTimeout(() => {
                    const element = document.getElementById(elementId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        } else {
            // Otherwise instant scroll to top
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [pathname, search, hash]);

    return null;
}
