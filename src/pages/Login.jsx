import { Button, Form,Row,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {login} from '../api/userApi'

export const Login = () => {

  const { email, seteMail, epassword, setePassword,setUser } = useAuth()

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await login(email,epassword).then((res) => {
        localStorage.setItem('user-data', JSON.stringify(res.data))
        localStorage.setItem('user-name', JSON.stringify(res.data.name))
        localStorage.setItem('user-id', JSON.stringify(res.data.id))


        setUser(true)
        navigate('/gorevler')
          

      })
  } catch (err) {
      console.log(err)
  }
}
  return ( 
    <Row>
      <div >
        
      <div style={{marginTop:50}}>
    <Col style={{ display: 'flex', justifyContent: "center" ,marginTop:5}}>
    <img src="https://imgyukle.com/f/2022/06/15/VIAByP.png" width={400}  height={300} alt='ımage' />
    </Col>
    </div>
    
    <Col>
    <div style={{ display: 'flex', justifyContent: "center" }}>
      <Form style={{ width: 400 }} onSubmit={handleSubmit}>
        <Form.Control value={email} onChange={(e) => seteMail(e.target.value)} className='w-100 mt-3' placeholder='E-Mail' type='mail'/>
        <Form.Control value={epassword} onChange={(e) => setePassword(e.target.value)} className='w-100 mt-3' placeholder='Password' type='password'/>
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
