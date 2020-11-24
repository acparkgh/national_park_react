import React from 'react';


class ParkDetail extends React.Component {


  handleAddToMyPark = () => {

    // console.log(this.props.parkObj.id)
    fetch('http://localhost:3000/api/v1/mytrips', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: 1,
        park_id: `${this.props.parkObj.id}`
      })
    })
    // .then(resolution => resolution.json())
    // .then(console.log)
  }


  render() {
    return (
      <div>
        <h1>Park Detail Page</h1>
        <br></br>
          <button onClick = { () => this.handleAddToMyPark() }>
            Add this park to your trip list:
          </button>
        <br></br>
        {this.props.parkObj.fullname}
        <img src = {this.props.parkObj.imageurl} alt = "park" />
      </div>
    )
  }

}

export default ParkDetail;