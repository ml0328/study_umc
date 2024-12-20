// src/hooks/useFetchMovies.js
import { useEffect, useState } from 'react';

const useFetchMovies = (apiKey, url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`${url}?api_key=${apiKey}&language=ko-KR`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const result = await response.json();
                setData(result.results || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [apiKey, url]);

    return { data, loading, error };
};

export default useFetchMovies;
