import React from 'react';
import Comment from './Comment';


class ParkDetail extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Park Detail Page</h1>
        <br></br>
          <button onClick = { () => this.props.handleAddToMyPark(this.props.parkObj) }>
            Add this park to your trip list:
          </button>
        <br></br>
        {this.props.parkObj.fullname}
        {this.props.parkObj.mytrips[0].comments.map( (comment) => {
           return (
             <Comment comment = {comment.comment} />
           )
        } ) }
        <img src = {this.props.parkObj.imageurl} alt = "park" />
      </div>
    )
  }

}

export default ParkDetail;