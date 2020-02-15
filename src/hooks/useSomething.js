import { useState, useEffect } from "react";
import api from "../services/ApiClient";

const useSomething = id => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.person(id);
        setData(result.data);
      } catch (err) {
        setError(err.message)
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);
  return {data, loading, error};
};

export default useSomething;
