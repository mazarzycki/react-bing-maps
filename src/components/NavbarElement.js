import React, { useState } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import './NavbarElement.css'
import LocationInfo from './LocationInfo';

const NavbarElement = () => {

const [style, setStyle] = useState('testButtonInvisible') 

const handleClick = () => {
  setStyle('testButtonVisible')
}


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">IT'S JUST A TEST NAVBAR</Navbar.Brand>
            <Button onClick={handleClick}>Click Me</Button>    
            <div className= {style}>TEST</div> 
      </Container>
    </Navbar>

  )
}

export default NavbarElement;