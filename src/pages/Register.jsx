import React from 'react'
import { Form,Button,Col,Row } from 'react-bootstrap'

export const Register = () => {
  return (
    <Row>
        <div style={{marginTop:50}}>
    <Col style={{ display: 'flex', justifyContent: "center" ,marginTop:5}}>
    <img src="https://imgyukle.com/f/2022/06/15/VIAByP.png" width={400}  height={300} ></img>
    </Col>
    </div>

    <Col>

    <div style={{ display: 'flex', justifyContent: "center"}}>
    <Form style={{ width: 400 }} >
      <Form.Control  className='w-100 mt-3' placeholder='Name' type='text'/>
      <Form.Control  className='w-100 mt-3' placeholder='Last Name' type='text'/>
      <Form.Control  className='w-100 mt-3' placeholder='User Name' type='text'/>
      <Form.Control  className='w-100 mt-3' placeholder='E-Mail' type='mail'/>
      <Form.Control  className='w-100 mt-3' placeholder='Password' type='password'/>
      <div style={{ display: 'flex', justifyContent: "center"}}>
      <Button type='submit' className='mt-3' variant='primary'>Register</Button>
      </div>
      
    </Form>
  </div>
    </Col>
    </Row>
    

  )
}
