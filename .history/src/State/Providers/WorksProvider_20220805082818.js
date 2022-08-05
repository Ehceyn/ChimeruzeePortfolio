import React from "react";
import { createContext, useEffect, useReducer, useState } from "react";
import WorksReducer, { initialState } from "../reducers/AuthReducer";
const WorksProvider = ({ children }) => {
  // Create a Workscontext
  const WorksContext = createContext();

  const [works, setWorks] = useState([]);
  const [work, setWork] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(WorksReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/works");
        const data = await res.json();
        setWorks(data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const worksState = {
    works,
    work,
    loading,
    error,
    dispatch,
  };

  return (
    <WorksContext.Provider value={worksState}>{children}</WorksContext.Provider>
  );
};
export default WorksProvider;
