import React , {useEffect} from 'react'
import { Button, Form,Row,Col } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {login} from '../api/userApi'

export const Login = () => {

  const { email, seteMail, epassword, setePassword,user,setUser } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({
      "mail": email,
      "password": epassword
    })
  }
  

  useEffect(() => {
    try {
        login(email,epassword).then((res) => {            
          console.log(res.data+"adsdasda")            
          setUser(res.data)
          console.log(user)
            

        })
    } catch (err) {
        //console.log(err)
    }
}, [email,epassword])

  return ( 
    <Row>

      <div >
        
      <div style={{marginTop:50}}>
    <Col style={{ display: 'flex', justifyContent: "center" ,marginTop:5}}>
    <img src="https://imgyukle.com/f/2022/06/15/VIAByP.png" width={400}  height={300} ></img>
    </Col>
    </div>
    
    <Col>
    <div style={{ display: 'flex', justifyContent: "center" }}>
      <Form style={{ width: 400 }} onSubmit={handleSubmit}>
        <Form.Control value={seteMail} onChange={(e) => seteMail(e.target.value)} className='w-100 mt-3' placeholder='E-Mail' type='mail'/>
        <Form.Control value={setePassword} onChange={(e) => setePassword(e.target.value)} className='w-100 mt-3' placeholder='Password' type='password'/>
        <div style={{ display: 'flex', justifyContent: "center"}}>
      <Button type='submit' className='mt-3' variant='primary'>Login</Button>
      </div>
      </Form>
    </div>
       
    </Col>
      
      </div>     

    
</Row>      



    

    
  )
}
