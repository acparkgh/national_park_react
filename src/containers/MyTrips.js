import React from 'react';
import MyParks from './MyParks';

class MyTrips extends React.Component {

  render() {
    // console.log("About", this.props)
    return (
      <div>
        
        <br></br>
          <button className = "btn btn-primary" 
                  onClick = { () => { 
                    return (
                      this.props.handleMyTrip()
                    )
                  } }>
            Show all my trips
          </button>
        <br></br>
        <MyParks myTrips = {this.props.myTrips}
                 handleUserComment = {this.props.handleUserComment} 
                 handleUserCommentSubmit = {this.props.handleUserCommentSubmit}
        />
   
      </div>
    )
  }

}

export default MyTrips;