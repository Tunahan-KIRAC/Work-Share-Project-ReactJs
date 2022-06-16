import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { getWorks } from "../api/workApi";
import { useWork } from "../context/WorkContext";
import WorkDetailModal from "./WorkDetailModal";

export const ListWorks = () => {
  const { setShow, works, setWorks ,aid,setaid} = useWork();

  const handleButton = (a) => {
    setaid(a)
    setShow(true);   
    console.log(aid);
       

  }


  useEffect(() => {
    try {
      getWorks().then((res) => {
        console.log(res.data)
        setWorks(res.data);
        
      }) 
    } catch(err) {
      console.log(err)
    }
    
    },[])

  return (
    <div className="d-flex flex-wrap">
        {works?.map((item, index) => (
        <Card key={index} style={{ width: "18rem", margin: "0px 15px 15px 0" }}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </Card.Text>
            
            <Button onClick={() => handleButton(item.id)} variant="dark">
              Detays
            </Button>
          </Card.Body>
        </Card>
      ))}


      <WorkDetailModal />
    </div>
  );
};
