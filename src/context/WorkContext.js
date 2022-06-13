import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const WorkContext = createContext();

export const WorkProvider = ({ children }) => {
  const [works, setWorks] = useState();
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState();

  /* useEffect(() => {
       try {
        axios.get("https://localhost:7031/api/Work").then((res) => {
           setWorks(res.data);
      });
     } catch (error) {
       console.log(error);
     }
   }, []); 
   
   */

  const values = {
    show,
    setShow,
    works,
    setWorks,
    categories,
    setCategories
    
  };


  return <WorkContext.Provider value={values}>{children}</WorkContext.Provider>;
};

export const useWork = () => useContext(WorkContext);
