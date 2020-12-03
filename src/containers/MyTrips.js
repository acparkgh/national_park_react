import React from 'react';
import SortMyTrips from '../components/SortMyTrips';
import MyParks from './MyParks';

class MyTrips extends React.Component {

  render() {
    // console.log("About", this.props)
    return (
      <div>
        
        <br></br>
        { this.props.userLoggedIn === true ?

            <button className = "btn btn-primary" 
                    onClick = { () => { 
                      return (
                        this.props.handleMyTrip()
                      )
                    } }>
              Show all my trips
            </button>

          : null
        }

        <br></br>
        { this.props.userLoggedIn === true ?
          <SortMyTrips handleSortMyTrips = {this.props.handleSortMyTrips} />

          : null
        }

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