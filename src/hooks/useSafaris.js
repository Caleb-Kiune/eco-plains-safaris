import { useState, useEffect } from 'react';

// Simple in-memory cache to prevent redundant fetches during session
// We use a global variable outside the hook so it persists between unmounts/remounts
const cache = {
    data: null,
    timestamp: null,
    promise: null
};

// Cache duration in milliseconds (e.g., 5 minutes)
const CACHE_DURATION = 5 * 60 * 1000;

export default function useSafaris() {
    const [safaris, setSafaris] = useState(cache.data ? cache.data.tours : []);
    const [loading, setLoading] = useState(!cache.data);
    const [error, setError] = useState(null);

    useEffect(() => {
        // If we have valid cached data, use it immediately
        const now = Date.now();
        if (cache.data && (now - cache.timestamp < CACHE_DURATION)) {
            setSafaris(cache.data.tours);
            setLoading(false);
            return;
        }

        // If a fetch is already in progress, reuse that promise
        if (cache.promise) {
            cache.promise
                .then(data => {
                    setSafaris(data.tours || []);
                    setLoading(false);
                })
                .catch(err => {
                    setError(err);
                    setLoading(false);
                });
            return;
        }

        // Otherwise, start a new fetch
        setLoading(true);
        cache.promise = fetch('/data/safaris.json')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch safaris');
                return res.json();
            })
            .then(data => {
                // Update cache
                cache.data = data;
                cache.timestamp = Date.now();
                cache.promise = null; // Clear promise on success so next time we might re-fetch if needed

                setSafaris(data.tours || []);
                setLoading(false);
                return data;
            })
            .catch(err => {
                console.error('Error fetching safaris:', err);
                setError(err);
                setLoading(false);
                cache.promise = null; // Clear promise on error
            });

        // Cleanup not really needed for the fetch itself, but good practice
        return () => { };
    }, []);

    return { safaris, loading, error };
}
