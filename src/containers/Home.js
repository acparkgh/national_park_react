import React from 'react';
import Parks from './Parks';
import Jumbo from '../components/Jumbo';
import Map from '../components/Map';
import Container from 'react-bootstrap/Container';
import TypeAheadFilter from '../components/TypeAheadFilter';




class Home extends React.Component {

  render() {
    return (
      <div>
        <Jumbo />
        <TypeAheadFilter parkNames = {this.props.parkNames}
                         searchedPark = {this.props.searchedPark}
                         handleSearchedPark = {this.props.handleSearchedPark}
        />

        <Container>
          <Map handleSubmit = {this.props.handleSubmit}/>            
        </Container>

        <Parks parksFilteredByState = {this.props.parksFilteredByState}
               parks = {this.props.parks}
        />
        
      </div>
    )
  }

}

export default Home;
