import { useState, useEffect } from 'react';

// Simple in-memory cache
const cache = {
    data: null,
    timestamp: null,
    promise: null
};

// Cache duration (5 minutes)
const CACHE_DURATION = 5 * 60 * 1000;

// Shared fetch logic
const fetchSafarisData = () => {
    // Return existing promise if fetching
    if (cache.promise) return cache.promise;

    // Return valid cached data
    const now = Date.now();
    if (cache.data && (now - cache.timestamp < CACHE_DURATION)) {
        return Promise.resolve(cache.data);
    }

    // Start new fetch
    cache.promise = fetch('/data/safaris.json')
        .then(res => {
            if (!res.ok) throw new Error('Failed to fetch safaris');
            return res.json();
        })
        .then(data => {
            cache.data = data;
            cache.timestamp = Date.now();
            cache.promise = null;
            return data;
        })
        .catch(err => {
            cache.promise = null;
            throw err;
        });

    return cache.promise;
};

// Export prefetch function
export const prefetchSafaris = () => {
    fetchSafarisData().catch(err => console.error('Prefetch failed:', err));
};

export default function useSafaris() {
    const [safaris, setSafaris] = useState(cache.data ? cache.data.tours : []);
    const [loading, setLoading] = useState(!cache.data);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;

        const getData = async () => {
            // Use shared fetch logic
            try {
                const data = await fetchSafarisData();
                if (mounted) {
                    setSafaris(data.tours || []);
                    setLoading(false);
                }
            } catch (err) {
                if (mounted) {
                    setError(err);
                    setLoading(false);
                }
            }
        };

        getData();

        return () => { mounted = false; };
    }, []);

    return { safaris, loading, error };
}
