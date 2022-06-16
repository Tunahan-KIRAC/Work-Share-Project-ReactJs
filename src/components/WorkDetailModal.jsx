import { useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useWork } from '../context/WorkContext'
import { getWorksByWorkid } from '../api/workApi'


const WorkDetailModal = () => {

  const { show, setShow, worksid, setWorksid,aid } = useWork()


  const handleClose = () => {
    setShow(false)
  }
  console.log(show);


  useEffect(() => {
    try {
      getWorksByWorkid(aid).then((res) => {
        //console.log('res.data')
        console.log('res.data', res.data);
        setWorksid(res.data);
        
        
      }) 
    } catch(err) {
      console.log(err)
    }
    
    },[aid])  


  return (
    <div>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{worksid?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{worksid?.price}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Teklif Ver
          </Button>
        </Modal.Footer>
      </Modal>

      
    </div>
    
  )
}

export default WorkDetailModal