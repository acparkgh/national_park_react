import React from 'react';
import Comment from './Comment';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
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
            <Card.Header>{this.props.parkObj.fullname}: <span>&nbsp;</span> {this.props.parkObj.city}, {this.props.parkObj.state} </Card.Header>
            <Card.Img variant="top" src = {this.props.parkObj.imageurl} />
            <Card.Body>
              <Card.Title>{this.props.parkObj.fullname}</Card.Title>
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
              {this.props.userLoggedIn !== true ?
                 null : <Button variant="primary"
                          onClick = { () => {
                            return (
                              this.props.handleAddToMyPark(this.props.parkObj)
                            )
                          } }
                        >
                          Add this park to your trip
                        </Button>
              }  
            </Card.Body>
          </Card>
        </CardDeck>

      </Row>  
      </Container>


    )
  }

}

export default ParkDetail;