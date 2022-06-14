import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ListCategories } from '../components/ListCategories'
import { ListWorks } from '../components/ListWorks'




export const Gorevler = () => {
  
  return (
    <Row className='mt-3'>
        <Col md={2}>
        <h4 className='text-center'>Kategoriler</h4>
            <ListCategories />
        </Col>
        <Col md={10}>
            <h4 className='text-center'>Görevlers</h4>
            <ListWorks/>
        </Col>
    </Row>
  )
}
