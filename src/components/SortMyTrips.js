import React from "react";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class SortMyTrips extends React.Component {
  render() {
    return (

      <div>
        <select onChange = { (e) => this.props.handleSortMyTrips(e) } >
          <option disabled selected>Choose sort option</option>
          <option value = "byName">Sort by Name</option>
          <option value = "byDate">Sort by Date</option>
        </select>
      </div>

    );
  }
}

export default SortMyTrips;
