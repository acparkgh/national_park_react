import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import Form from 'react-bootstrap/Form';

class TypeAheadFilter extends React.Component {

  render() {
    return (

      <Form.Group>
      <Form.Label>Search for a park</Form.Label>
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          onChange={(selected) => this.props.handleSearchedPark(selected)}
          options={this.props.parkNames}
          placeholder="Choose a Park..."
          // selected={singleSelections}
        />
      </Form.Group>

    )
  }
}

export default TypeAheadFilter;