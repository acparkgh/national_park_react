import React from 'react';
import USAMap from 'react-usa-map';

class Map extends React.Component {

  // mapHandler = (event) => {
  //   debugger
  //   alert(event.target.dataset.name);
  // }

  render() {
    return (
      <div className="App">
        <USAMap onClick = { (event) => this.props.handleSubmit(event)} />
      </div>
    )
  }

}

export default Map;
