import React from 'react';

class FilterForm extends React.Component {

  render() {
    return (
      <div>
        <h2>* "FilterForm" component within "Home" component</h2>
        <form onSubmit = { (event) => { return this.props.handleSubmit(event) } }>
          <input type="text" 
                 name="stateCode" 
                 onChange={ (event) => { return this.props.handleStateCodeChange(event) } } 
                 //  value={this.state.stateCode} 
          />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default FilterForm;