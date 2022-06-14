import React from 'react'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
  <Container fluid>
  <a>
      <img src='https://imgyukle.com/f/2022/06/14/VI49ct.jpg' style={{height:50,width:70}}></img>
    </a>
    
    <Navbar.Brand style={{marginLeft:20}} href="/">Feleket Bir İş</Navbar.Brand>
    
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >        
        <Nav.Link href="/gorevler">Görevler</Nav.Link>
        <Nav.Link href="/gorevVer">Görev Ver</Nav.Link>        
      </Nav>
      <Form className="d-flex">
      
        <FormControl
          type="search"
          placeholder="Ara"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      <Nav.Link style={{color:"white"}} href="/login">Login</Nav.Link>
      <Nav.Link style={{color:"white"}} href="/register">register</Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>

    )
}

export default NavBar
