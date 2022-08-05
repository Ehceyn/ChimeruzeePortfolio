import React from "react";
import { createContext, useEffect, useReducer, useState } from "react";
import { db } from "../../../firebase/config";
const WorksProvider = ({ children }) => {
  // Create a Workscontext
  const WorksContext = createContext();

  const [works, setWorks] = useState([]);
  const [work, setWork] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    message: "",
    status: false,
  });
  useEffect(() => {
    fetchData();
  }, []);

  //   Fetch data from firebase
  const fetchData = async () => {
    setLoading(true);
    try {
      const works = await db.collection("projects").get();
      const worksArray = works.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setWorks(worksArray);
    } catch (error) {
      setError({
        message: error.message,
        status: true,
      });
    }
    setLoading(false);
  };

  //   Get a work by id from firebase
  const getWork = async (id) => {
    setLoading(true);
    try {
      const work = await db.collection("projects").doc(id).get();
      setWork({
        ...work.data(),
        id: work.id,
      });
    } catch (error) {
      setError({
        message: error.message,
        status: true,
      });
    }
    setLoading(false);
  };

  const worksState = {
    works,
    work,
    loading,
    error,
    getWork,
  };

  return (
    <WorksContext.Provider value={worksState}>{children}</WorksContext.Provider>
  );
};
export default WorksProvider;
