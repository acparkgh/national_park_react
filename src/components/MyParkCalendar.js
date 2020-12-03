import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class MyParkCalendar extends React.Component {

  render() {
    return (
      <div>
       {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
       {/* <DatePicker selected = {this.props.startDate}   */}
       <DatePicker selected={new Date()}
                   onChange = { (date) => {
                     return (
                       this.props.changeStartDate(date, this.props.park)
                     )
                   } }
       /> 
       <br>
       </br>
       {/* <DatePicker selected = {this.props.endDate} */}
       <DatePicker selected={new Date()}
                   onChange = { (date) => {
                     return (
                       this.props.changeEndDate(date, this.props.park)
                     )
                   } } 
       />
      </div>
    )
  }

}

export default MyParkCalendar;