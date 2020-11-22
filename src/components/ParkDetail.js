import React from 'react';

class ParkDetail extends React.Component {

  render() {
    return (
      <div>
        {/* {console.log(this.props)} */}
        <h1>Park Detail Page</h1>
        {this.props.parkDetail.fullname}
        <img src = {this.props.parkDetail.imageurl} alt = "park" />
      </div>
    )
  }

}

export default ParkDetail;