import React from 'react';
import Parks from './Parks';
import FilterForm from '../components/FilterForm';


class Home extends React.Component {

  render() {
    return (
      <div>
        
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
