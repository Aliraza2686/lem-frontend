import { useState, useEffect, useCallback } from 'react';

const useVisitors = () => {
  const [visitors, setVisitors] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVisitors = useCallback(async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/visitors`);
      const data = await res.json();
      setVisitors(data.visitors);
      setTotal(data.total);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVisitors();
    const interval = setInterval(fetchVisitors, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, [fetchVisitors]);

  return { visitors, total, loading, error, refetch: fetchVisitors };
};

export default useVisitors;