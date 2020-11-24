import React from 'react';
import Parks from './Parks';
import FilterForm from '../components/FilterForm';


class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>*** This is "home" page/component - Top</h1>
        <FilterForm handleStateCodeChange = {this.props.handleStateCodeChange}
                    handleSubmit = {this.props.handleSubmit} />
        <Parks parksFilteredByState = {this.props.parksFilteredByState}
               parks = {this.props.parks}
        />
        <h1>*** This is "home" page/component - bottom</h1>
      </div>
    )
  }

}

export default Home;
