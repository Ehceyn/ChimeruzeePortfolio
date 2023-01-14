import React from "react";
import { createContext, useEffect, useReducer, useState } from "react";
import { db } from "../../../firebase/config";
import { ref, set, get } from "firebase/database";
import { collection, getDoc, getDocs } from "firebase/firestore";

// Create a Workscontext
export const WorksContext = createContext();

const WorksProvider = ({ children }) => {
  const [works, setWorks] = useState([]);
  const [work, setWork] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    message: "",
    status: false,
  });
  // useEffect(() => {
  //   fetchData();
  // }, []);

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
    const doc = await getDoc(collection(db, "projects"), id);
    setWork(doc.data());
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
