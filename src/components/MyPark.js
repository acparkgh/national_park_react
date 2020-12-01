import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Form from 'react-bootstrap/Form';
import CommentForm from './CommentForm';


class MyPark extends React.Component {

  render() {
    return (

      // <div>
      //   <em>MyPark Component</em>
      //   <br></br>
      //   {this.props.park.parkcode}
      //   <br></br>
        
        
      //   {this.props.park.fullname}
      //   <br></br>
      //   {this.props.park.state}
      //   <br></br>
      //   <img src = {this.props.park.imageurl} />
        
      // </div>

      <CardDeck>
        <Card border="light" style={{ width: '50rem' }}>
          <Card.Header>{this.props.park.fullname}</Card.Header>
          <Card.Img variant="top" src = {this.props.park.imageurl} />
          <Card.Body>
            <Card.Title>{this.props.park.fullname}</Card.Title>
            <Card.Text>
              {this.props.park.parkcode}
              <br></br>
              {this.props.park.fullname}
              <br></br>
              {this.props.park.state}
            </Card.Text>
            <CommentForm handleUserComment = {this.props.handleUserComment} 
                         handleUserCommentSubmit = {this.props.handleUserCommentSubmit}
                         park = {this.props.park}
                         
            />
          </Card.Body>
        </Card>
      </CardDeck>


    )
  }

}

export default MyPark;