import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


class Park extends React.Component {

  // render() {
  //   return (
  //     <div>
  //       {this.props.park.parkcode}
  //       <br></br>
  //       <Link to={`/parks/${this.props.park.parkcode}`}>Click for more info</Link>
  //       <br></br>
  //       {this.props.park.fullname}
  //       <br></br>
  //       {this.props.park.state}
  //       <br></br>
  //       <img src = {this.props.park.imageurl} />
        
  //     </div>
  //   )
  // }

  render() {
    return (
      <CardDeck>
        <Card border="light" style={{ width: '50rem' }}>
          <Card.Header as="h5">{this.props.park.fullname}: <span>&nbsp;</span> {this.props.park.city}, {this.props.park.state} </Card.Header>
          <Card.Img variant="top" src = {this.props.park.imageurl} />
          <Card.Body>
          <Card.Title as="h4">{this.props.park.fullname}</Card.Title>
            <Card.Text>
              {this.props.park.description}
            </Card.Text>
            <Link to={`/parks/${this.props.park.parkcode}`} 
                  className = "btn btn-primary"
                  // onClick = { () => {
                  //   return (
                  //     this.props.handleFetchImages(this.props.park)
                  //   )
                  // } }      
            >    
                  Learn More
            </Link>
            {/* <Button variant="primary">More Info</Button> */}
          </Card.Body>
        </Card>
      </CardDeck>

    )
  }

}

export default Park;