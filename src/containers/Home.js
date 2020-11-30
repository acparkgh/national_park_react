import React from 'react';
import Parks from './Parks';
import FilterForm from '../components/FilterForm';
import Jumbo from '../components/Jumbo';




class Home extends React.Component {

  render() {
    return (
      <div>
        <Jumbo />
        <FilterForm handleStateCodeChange = {this.props.handleStateCodeChange}
                    handleSubmit = {this.props.handleSubmit} />
        <Parks parksFilteredByState = {this.props.parksFilteredByState}
               parks = {this.props.parks}
        />
        
      </div>
    )
  }

}

export default Home;
