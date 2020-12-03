import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
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
              {/* <Nav.Link href = "/about">About</Nav.Link> */}
              <Nav.Link href = "/about">Create Account</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {/* <Nav.Link href = "/about">About</Nav.Link> */}
              <Nav.Link href = "/about"></Nav.Link>
            </Nav.Item>

              { this.props.userLoggedIn === true ?
                  <Navbar.Text className="loggedin-user"> 
                    Welcome {this.props.loggedInUser.screen_name} 
                  </Navbar.Text> 
                : null
              }

            <Nav.Item>
              {/* <Nav.Link href = "/about">About</Nav.Link> */}
              <Nav.Link href = "/about"></Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>  
          
                  
          <Form inline>
            {this.props.userLoggedIn === true ?
               null : <FormControl type="text" 
                                   placeholder="Username" 
                                   className=" mr-sm-2"
                                   onChange={ (event) => { 
                                     return (
                                       this.props.handleUserNameChange(event)
                                     ) 
                                   } }              
                      />
            }    
                
          </Form>

          <Form inline
                onSubmit = { (event) => { 
                  return (
                    this.props.handleLoginSubmit(event)
                  ) 
                } }
          >
            { this.props.userLoggedIn === true ?
              null : <FormControl type="password" placeholder="Password" className=" mr-sm-2" />
            }

            { this.props.userLoggedIn === false ?
              <Button type="submit">Login</Button> : <Button type="submit">Logout</Button>
            }
          </Form>
            
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