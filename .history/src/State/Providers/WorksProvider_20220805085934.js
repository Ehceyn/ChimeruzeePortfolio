import React from "react";
import { createContext, useEffect, useReducer, useState } from "react";
import { db } from "../../../firebase/config";
import { ref, set, get } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
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

  //   Fetch data from firebase v9
  const fetchData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "projects"));
    const works = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setWorks(works);
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
