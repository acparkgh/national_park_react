import React from 'react';
import MyParks from './MyParks';

class MyTrips extends React.Component {

  render() {
    // console.log("About", this.props)
    return (
      <div>
        <h1>*** This is my Trips page/component!!!</h1>
        <br></br>
          <button onClick = { () => this.props.handleMyTrip() }>
            Show all my trips:
          </button>
        <br></br>
        <MyParks myTrips = {this.props.myTrips} />
   
      </div>
    )
  }

}

export default MyTrips;