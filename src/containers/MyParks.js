import React from 'react';
import MyPark from '../components/MyPark';



class MyParks extends React.Component {

  render() {

     return (
       <div>
          <h2>-----------------------------------------------</h2>
          <h2>* "MyParks" component/container within "MyTrips" component:</h2>
          {this.props.myTrips.map( (park) => {
            return (
              <MyPark key = {park.parkcode}
                    park = {park} />
            )
          } )} 
       </div>
     )
   }


}

export default MyParks;