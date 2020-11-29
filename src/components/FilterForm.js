import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FilterForm extends React.Component {

  render() {
    return (
 
      //  <div>
      //    <form onSubmit = { (event) => { return this.props.handleSubmit(event) } }>
      //     <input type="text" 
      //            name="stateCode" 
      //            onChange={ (event) => { return this.props.handleStateCodeChange(event) } } 
      //            //  value={this.state.stateCode} 
      //     />
      //     <input type="submit" />
      //   </form>
      // </div>

      <Form onSubmit = { (event) => { return (this.props.handleSubmit(event)) } }>
        <Form.Group controlId="formStateCode">
          <Form.Label>Enter State Code</Form.Label>
          <Form.Control type="text" 
                        placeholder="MD for example" 
                        name="stateCode"
                        onChange={ (event) => { 
                          return (
                            this.props.handleStateCodeChange(event)
                          ) 
                        } }
          />
          {/* <Form.Text className="text-muted">
            Enter State Code
          </Form.Text> */}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    )

  }

}

export default FilterForm;