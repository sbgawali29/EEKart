import { useEffect, useState } from 'react'; 

export const useProducts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch('https://equalexperts.github.io/frontend-take-home-test-data/products.json');
        if (!response.ok) throw new Error('Network error');
        const result = await response.json();
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch {
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => { isMounted = false; };
  }, []);

  return { data, loading, error };
};