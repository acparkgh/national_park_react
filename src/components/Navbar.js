import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

class NavigationBar extends React.Component {

  render() {
    return (
      <Navbar sticky="top" expand = "lg" bg = "primary" variant = "dark">
        <Navbar.Brand href = "/">National Park Adventure</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className = "ml-auto">
            <Nav.Item>
              <Nav.Link href = "/" >Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href = "/mytrips">MyTrips</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href = "/about">About</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>  
      </Navbar>
    )
  }

  
  // render() {
  //   return (
  //     <div>
  //         <NavLink to = "/">Home</NavLink>
  //         <h3></h3>
  //         <NavLink to = "/mytrips">MyTrips</NavLink>
  //         <h3></h3>
  //         <NavLink to = "/about">About</NavLink>          
  //     </div>
  //   )
  // }

}




export default NavigationBar;