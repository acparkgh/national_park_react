import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (
      <div>
        <h1>***"Navbar" component - Top</h1>
        <h1>National Park Adventure!</h1>
          <NavLink to = "/">Home</NavLink>
          <h3></h3>
          <NavLink to = "/about">About</NavLink>          

        <h1>***"Navbar" component - Bottom</h1>
        <h3>--------------------------------------------------</h3>
      </div>
    )
  }

}

export default Navbar;