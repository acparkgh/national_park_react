import React from 'react';
import { Link } from 'react-router-dom'

class Park extends React.Component {

  render() {
    return (
      <div>
        {this.props.park.parkcode}
        <br></br>
        <Link to={`/parks/${this.props.park.parkcode}`}>Click for more info</Link>
        <br></br>
        {this.props.park.fullname}
        <br></br>
        {this.props.park.state}
        <br></br>
        <img src = {this.props.park.imageurl} />
        
      </div>
    )
  }

}

export default Park;