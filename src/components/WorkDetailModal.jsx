import { useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useWork } from '../context/WorkContext'
import { getWorksByWorkid } from '../api/workApi'


const WorkDetailModal = () => {

  const { show, setShow, worksid, setWorksid,aid } = useWork()


  const handleClose = () => {
    setShow(false)
  }

  useEffect(() => {
    try {
      getWorksByWorkid(aid).then((res) => {
        console.log(res.data)
        setWorksid(res.data);
        
      }) 
    } catch(err) {
      console.log(err)
    }
    
    },[])


  return (
    <div>
      {worksid?.map((item)=>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{item.price}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Teklif Ver
          </Button>
        </Modal.Footer>
      </Modal>
      )}
      
    </div>
    
  )
}

export default WorkDetailModal