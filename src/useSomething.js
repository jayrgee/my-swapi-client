import { useState, useEffect } from "react";
import something from "./classes/SomeThing";

const useSomething = id => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await something.person(id);
      setData(result.data);
    };
    fetchData();
  }, [id]);
  return [data];
};

export default useSomething;
