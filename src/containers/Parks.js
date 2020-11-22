import React from 'react';
import Park from '../components/Park';



class Parks extends React.Component {

  render() {

     return (
       <div>
          <h2>-----------------------------------------------</h2>
          <h2>* "Parks" component/container within "Home" component:</h2>
          {this.props.parksFilteredByState.map( (park) => {
            return (
              <Park key = {park.parkcode}
                    park = {park} />
            )
          } )} 
       </div>
     )
   }


}

export default Parks;