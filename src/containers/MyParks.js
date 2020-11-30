import React from 'react';
import MyPark from '../components/MyPark';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



class MyParks extends React.Component {

  render() {

    return (
      //  <div>
      //     <h2>-----------------------------------------------</h2>
      //     <h2>* "MyParks" component/container within "MyTrips" component:</h2>
      //     {this.props.myTrips.map( (park) => {
      //       return (
      //         <MyPark key = {park.parkcode}
      //               park = {park} />
      //       )
      //     } )} 
      //  </div>

   
      <Container>
        <Row>

          {this.props.myTrips.map( (park) => {
            return (
              <MyPark key = {park.parkcode}
              park = {park} />
              )
            } )} 
       
        </Row>
      </Container> 
     )
   }

  }

export default MyParks;