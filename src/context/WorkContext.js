//import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const WorkContext = createContext();

export const WorkProvider = ({ children }) => {
  const [works, setWorks] = useState();
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState();
  const [worksid, setWorksid] = useState();
  const [aid, setaid] = useState();

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
    worksid,
    setWorksid,
    categories,
    setCategories,
    aid,
    setaid
    
  };


  return <WorkContext.Provider value={values}>{children}</WorkContext.Provider>;
};

export const useWork = () => useContext(WorkContext);
