import { useState, useEffect } from "react";
import api from "../services/ApiClient";

const useInstanceGet = query => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.instance().get(query);
        setData(result.data);
      } catch (err) {
        setError(err)
      }
      setLoading(false);
    };
    fetchData();
  }, [query]);
  return {data, loading, error};
};

export default useInstanceGet;
