import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Form from 'react-bootstrap/Form';
import CommentForm from './CommentForm';
import MyParkCalendar from './MyParkCalendar';
import Moment from 'react-moment';


class MyPark extends React.Component {

  constructor(props) {
    super(props)
    // debugger
    this.state = {
      //  startDate: this.props && this.props.park && this.props.park.mytrips && this.props.park.mytrips[0] && this.props.park.mytrips[0].start_date,
      //  endDate: this.props && this.props.park && this.props.park.mytrips && this.props.park.mytrips[0] && this.props.park.mytrips[0].end_date,
      
      startDate: this.props.park.mytrips[0].start_date,
      endDate: this.props.park.mytrips[0].end_date
    
    }
  }

  changeStartDate = (date, searchedPark) => {
    // debugger
    // console.log(newDate)
    this.setState({
      startDate: JSON.stringify(date).substring(1,11)
    })
    
    
    fetch(`http://localhost:3000/api/v1/mytrips/${searchedPark.mytrips[0].id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        start_date: date
        // start_date: this.state.startDate
      })
    })
    // .then(resolution => resolution.json())
    // .then(console.log)

  }

  changeEndDate = (date, searchedPark) => {
    this.setState({
      endDate: JSON.stringify(date).substring(1,11)
    })

    fetch(`http://localhost:3000/api/v1/mytrips/${searchedPark.mytrips[0].id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        end_date: date
        // end_date: this.state.endDate
      })
    })
    // .then(resolution => resolution.json())
    // .then(console.log)

  }

  render() {
    return (

      <CardDeck>
        <Card border="light" style={{ width: '50rem' }}>
          <Card.Header as="h5">{this.props.park.fullname} <br></br>
            Trip Dates: {"from "}{this.state.startDate} {"until "} {this.state.endDate}
          </Card.Header>
          <Card.Img variant="top" src = {this.props.park.imageurl} />
          <Card.Body>
            <Card.Title>{this.props.park.fullname}</Card.Title>
            <Card.Text>
              {/* {this.props.park.parkcode} */}
              {/* <br></br> */}
              {/* {this.props.park.fullname} */}
              {/* <br></br> */}
              {this.props.park.city},<span>&nbsp;</span>{this.props.park.state}
            </Card.Text>
            <Card.Text as="h4">Choose travel dates:</Card.Text>
            <MyParkCalendar startDate = {this.state.startDate}
                            endDate = {this.state.endDate}
                            changeStartDate = {this.changeStartDate}
                            changeEndDate = {this.changeEndDate}
                            park = {this.props.park}
            />
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