import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const Login = () => {

  const { mail, setMail, password, setPassword } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({
      "mail": mail,
      "password": password
    })
  }


  return (
    <div style={{ display: 'flex', justifyContent: "center" }}>
      <Form style={{ width: 400 }} onSubmit={handleSubmit}>
        <Form.Control value={mail} onChange={(e) => setMail(e.target.value)} className='w-100 mt-3' placeholder='E-Mail' type='mail'/>
        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} className='w-100 mt-3' placeholder='Password' type='password'/>
        <Button type='submit' className='mt-3' variant='primary'>Login</Button>
      </Form>


      <Routes>
        <Route path="login" element={<Login />} exact/>
      </Routes>
    </div>

    
  )
}
