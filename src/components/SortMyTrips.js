import React from "react";

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
