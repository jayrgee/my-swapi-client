import { useState, useEffect } from "react";
import something from "./classes/SomeThing";

const useSomethingInstance = id => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await something.instance.get(`people/${id}`);
      setData(result.data);
    };
    fetchData();
  }, [id]);
  return [data];
};

export default useSomethingInstance;
