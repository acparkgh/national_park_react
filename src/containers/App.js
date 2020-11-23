import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from '../components/About';
import Navbar from '../components/Navbar';
import ParkDetail from '../components/ParkDetail';


class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      parks: [],
      stateCode: "",
      parksFilteredByState: [],
      myTrips: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/parks")
      .then((response) => {return response.json()})
      .then((parksAarray) => {
        return (
          this.setState({
            parks: parksAarray
          })
        )
      })
  }

  // async componentDidMount() {
  //   const response = await fetch("http://localhost:3000/api/v1/parks")
  //   const parks = await response.json()
  //   this.setState({ parks })
  // }  
 
  handleStateCodeChange = (event) => {
    this.setState({
      stateCode: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ 
      parksFilteredByState: this.state.parks.filter( (park) => { 
                              return (
                                park.state === this.state.stateCode
                              )
                            } )
    })
  }

  handleMyTrip = () => {
    this.setState({
      myTrips: this.state.parks.filter( (park) => {
                 return (
                   park.user_id === 1
                 )
      } )
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path='/parks/:parkcode' render = { (routerProps) => {
                  let parkCode = routerProps.match.params.parkcode
                  let parkObj = this.state.parks.find( (park) => {return (park.parkcode === parkCode)} ) 
                  // console.log(this.state.parks)
                return (
                  <ParkDetail parkObj = {parkObj} /> 
                )
              } } 
              />
              <Route path = "/about" component = {About} /> 
              <Route exact path = "/" 
                    render = { () => {
                      return (
                        <Home handleStateCodeChange = {this.handleStateCodeChange}
                              handleSubmit = {this.handleSubmit}
                              parksFilteredByState = {this.state.parksFilteredByState}
                        />
                      )
                    } } 
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

