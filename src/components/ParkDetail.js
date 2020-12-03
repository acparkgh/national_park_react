import React from 'react';
import Comment from './Comment';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Accordion from 'react-bootstrap/Accordion';



class ParkDetail extends React.Component {
  
  render() {
    // console.log(this.props.park)

    return (
      // <div>
      //   <h1>*** Park Detail Page/Component ***</h1>
      //   <br></br>
      //     <button onClick = { () => this.props.handleAddToMyPark(this.props.parkObj) }>
      //       Add this park to your trip list:
      //     </button>
      //   <br></br>
      //   {this.props.parkObj.fullname}

      //   { this.props.parkObj.mytrips !== undefined && this.props.parkObj.mytrips.length !== 0 ?   
      //       this.props.parkObj.mytrips[0].comments.map( (comment) => {
      //         return (
      //           <Comment key = {comment.id} 
      //                    user = {this.props.parkObj.mytrips[0].user}  
      //                    comment = {comment.comment} 
      //           />
      //         )
      //       } ) 
      //     :
      //       null
      //   }

      //   <img src = {this.props.parkObj.imageurl} alt = "park" />
      // </div>
      <Container>
      <Row>

        <CardDeck>
          <Card border="light" style={{ width: '50rem' }}>
            {/* <Card.Header as="h5">{this.props.parkObj.fullname}: <span>&nbsp;</span> {this.props.parkObj.city}, {this.props.parkObj.state} </Card.Header> */}
            <Card.Header as="h4">{this.props.parkObj.fullname} <span>&nbsp;&nbsp;&nbsp;</span>
            
            {this.props.userLoggedIn !== true ?
               null : <Button variant="primary"
                        onClick = { () => {
                          return (
                            this.props.handleAddToMyPark(this.props.parkObj)
                          )
                        } }
                      >
                        Add this park to MyTrips
                      </Button>
            }  

            
            </Card.Header>
            <Card.Img variant="top" src = {this.props.parkObj.imageurl} />
            <Card.Body>

            {/* {this.props.userLoggedIn !== true ?
               null : <Button variant="primary"
                        onClick = { () => {
                          return (
                            this.props.handleAddToMyPark(this.props.parkObj)
                          )
                        } }
                      >
                        Add this park to your trip
                      </Button>
            }   */}

            <Card.Text as="h5">{this.props.parkObj.description}</Card.Text>

            <ListGroup className="list-group-flush">

              <ListGroupItem>
                <Card.Title>Park Designation:</Card.Title>
                  <Card.Text>
                  {this.props.parkObj.designation}
                  </Card.Text>
              </ListGroupItem>

              <ListGroupItem>
                <Card.Title>Address:</Card.Title>
                  <Card.Text>
                    {this.props.parkObj.addline1}, {this.props.parkObj.city}, {this.props.parkObj.state} {this.props.parkObj.postalcode}
                  </Card.Text>
              </ListGroupItem>

              <ListGroupItem>
                <Card.Title>Phone Number:</Card.Title>
                  <Card.Text>
                    {this.props.parkObj.phonenumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}
                  </Card.Text>
              </ListGroupItem>

              <ListGroupItem>
                <Card.Title>Weather Information:</Card.Title>
                  <Card.Text>
                  {this.props.parkObj.weatherinfo}
                  </Card.Text>
              </ListGroupItem>
            </ListGroup>

            <Card.Body>
              <Card.Link href={this.props.parkObj.url} className = "btn btn-primary">Visit Park Website</Card.Link>
              
            </Card.Body>
    
              <Card.Text>
                { this.props.parkObj.mytrips !== undefined && this.props.parkObj.mytrips.length !== 0 ?
                    this.props.parkObj.mytrips[0].comments.map( (comment) => {
                      return (
                        <Comment key = {comment.id} 
                                 user = {this.props.parkObj.mytrips[0].user}  
                                 comment = {comment.comment}
                                 commentdate = {comment.created_at} 
                        />
                      )
                    } ) 
                  :
                    null
                }
              </Card.Text>
              
            </Card.Body>
          </Card>
        </CardDeck>

      </Row>  
      </Container>


    )
  }

}

export default ParkDetail;