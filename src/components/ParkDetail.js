import React from 'react';
import Comment from './Comment';


class ParkDetail extends React.Component {
  
  render() {
    // console.log(this.props.park)

    return (
      <div>
        <h1>*** Park Detail Page/Component ***</h1>
        <br></br>
          <button onClick = { () => this.props.handleAddToMyPark(this.props.parkObj) }>
            Add this park to your trip list:
          </button>
        <br></br>
        {this.props.parkObj.fullname}

        { this.props.parkObj.mytrips !== undefined && this.props.parkObj.mytrips.length !== 0 ?   
            this.props.parkObj.mytrips[0].comments.map( (comment) => {
              return (
                <Comment key = {comment.id} 
                         user = {this.props.parkObj.mytrips[0].user}  
                         comment = {comment.comment} 
                />
              )
            } ) 
          :
            null
        }

        <img src = {this.props.parkObj.imageurl} alt = "park" />
      </div>
    )
  }

}

export default ParkDetail;