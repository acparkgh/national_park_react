import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Accordion from 'react-bootstrap/Accordion'


class CommentForm extends React.Component {

  render() {
    return (

      // <Form onSubmit = { (event) => {
      //         return (
      //           this.props.handleUserCommentSubmit(event)
      //         )
      // }}
      // >
      //   <Form.Group controlId="formBasicEmail">
      //     <Form.Label></Form.Label>
      //     <Form.Control type="comment" 
      //                   placeholder="Enter comment"
      //                   onChange={ (event) => {
      //                     return (
      //                       this.props.handleUserComment(event)
      //                     )
      //                   } } 
      //     />
      //     <Form.Text className="text-muted">
      //       Enter a comment to share with everyone:
      //     </Form.Text>
      //   </Form.Group>

      //   <Button variant="primary" type="submit">
      //     Submit
      //   </Button>
      // </Form>


      <Form >
      <Form.Group controlId="formBasicEmail">
      <Form.Label></Form.Label>
      <Form.Control type="comment" 
                    placeholder="Enter comment"
                    onChange={ (event) => {
                      return (
                        this.props.handleUserComment(event)
                      )
                    } } 
      />
      <Form.Text className="text-muted">
      Enter a comment to share with everyone:
      </Form.Text>
      </Form.Group>

      <Button variant="primary" 
              type="submit" 
              onClick = { () => {
                return (
                  this.props.handleUserCommentSubmit(this.props.park)
                )
              } }  
      >
      Submit
      </Button>
      </Form>



    )
  }
}

export default CommentForm;