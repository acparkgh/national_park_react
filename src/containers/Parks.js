import React from 'react';
import Park from '../components/Park';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';



class Parks extends React.Component {

  render() {

     return (
      //  <div>
                    
      //     {this.props.parksFilteredByState.map( (park) => {
      //       return (
      //         <Park key = {park.parkcode}
      //               park = {park}
      //               parks = {this.props.parks} />
      //       )
      //     } )} 
      //  </div>

        <Container>
          <Row>

            {this.props.parksFilteredByState.map( (park) => {
              return (
                <Park key = {park.parkcode}
                park = {park}
                parks = {this.props.parks} />
                )
              } )} 
              
          </Row>
        </Container>
     )
  }
}
export default Parks;