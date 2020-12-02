import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Comment extends React.Component {

  render() {
    return (

      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Comment entered by member "{this.props.user.screen_name}" on {this.props.commentdate.substring(0,10)}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{this.props.comment}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

        // <ul>
        //   <li>
        //     Commented by: {this.props.user.screen_name}<br></br>
        //     {this.props.comment}<br></br>
        //   </li>
        // </ul>

    )
  }

}

export default Comment;