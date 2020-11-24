import React from 'react';


class MyPark extends React.Component {

  render() {
    return (
      <div>
        <em>MyPark Component</em>
        <br></br>
        {this.props.park.parkcode}
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

export default MyPark;