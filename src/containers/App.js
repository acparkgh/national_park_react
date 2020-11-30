import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from '../components/About';
import MyTrips from './MyTrips';
import NavigationBar from '../components/Navbar';
import ParkDetail from '../components/ParkDetail';


class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      parks: [],
      stateCode: "",
      parksFilteredByState: [],
      myTrips: [],
      users: [],
      allMyTrips: [],
      user: null,
      userLoggedIn: false,
      username: ""
    }
  }


  componentDidMount() {

    fetch("http://localhost:3000/api/v1/parks")
      .then((response) => {return response.json()})
      .then((parksAarray) => {
        return (
          this.setState({
            parks: parksAarray,
            myParks: []
          })
        )
      })
      
    fetch("http://localhost:3000/api/v1/users")
      .then((response) => {return response.json()})
      .then((usersArray) => {
        return (
          this.setState({
            users: usersArray
          })
          )
        })

    fetch("http://localhost:3000/api/v1/mytrips")
      .then((response) => {return response.json()})
      .then((allMyTripsArray) => {
        return (
          this.setState({
            allMyTrips: allMyTripsArray
          })
          )
        })      
  }

  // async componentDidMount() {
  //   const response = await fetch("http://localhost:3000/api/v1/parks")
  //   const parks = await response.json()
  //   this.setState({ parks })
  // }  
 
  
  handleUserNameChange = (event) => {
    // debugger
    this.setState({
      username: event.target.value
    })
  }
  
  handleLoginSubmit = (event) => {
    event.preventDefault()
    // debugger
    fetch(`http://localhost:3000/api/v1/users/${this.state.username}`)
      .then(response => response.json())
      .then(loggedInUser => {
        return (
          this.setState({
            user: loggedInUser,
            userLoggedIn: true
          })
        )
      })
  }

  handleStateCodeChange = (event) => {
    // debugger
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
    // debugger
    fetch("http://localhost:3000/api/v1/parks")
    .then((response) => {return response.json()})
    .then((parksAarray) => {
      return (
        this.setState({
          parks: parksAarray
        })
      )
    })

    let parksWithTrips = this.state.parks.filter( (park) => { 
                             return park.mytrips !== undefined && park.mytrips.length !== 0
                            } )

    this.setState({
      myTrips: parksWithTrips.filter( (park) => {
                 return (
                   (park.mytrips[0]).user_id === 1
                 )
      } )
    })
  }

    
  handleAddToMyPark = (addedPark) => {
    // debugger
    this.setState({
      myTrips: [...this.state.myTrips, addedPark]
    })

    fetch('http://localhost:3000/api/v1/mytrips', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: 1,
        park_id: addedPark.id
      })
    })
    // .then(resolution => resolution.json())
    // .then(console.log)
    
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavigationBar handleUserNameChange = {this.handleUserNameChange}
                           handleLoginSubmit = {this.handleLoginSubmit}
                           loggedInUser = {this.state.user}
                           userLoggedIn = {this.state.userLoggedIn}
            />
            <Switch>
              <Route path='/parks/:parkcode' render = { (routerProps) => {
                  let parkCode = routerProps.match.params.parkcode
                  let parkObj = this.state.parks.find( (park) => {
                                                         return (
                                                           park.parkcode === parkCode
                                                         )
                                                      } ) 
                  // console.log(this.state.parks)
                return (
                  <ParkDetail parkObj = {parkObj}
                              parks = {this.state.parks}
                              users = {this.state.users}
                              myTrips = {this.state.myTrips}
                              handleAddToMyPark = {this.handleAddToMyPark}
                  /> 
                )
              } } 
              />

              <Route path = "/about" component = {About} /> 

              <Route path = "/mytrips" 
                     render = { () => {
                       return (
                         <MyTrips handleMyTrip = {this.handleMyTrip}
                                  myTrips = {this.state.myTrips}
                                  parks = {this.state.parks}
                         />
                       )  
                    
                     } } 
              /> 
              

              <Route exact path = "/" 
                    render = { () => {
                      return (
                        <Home handleStateCodeChange = {this.handleStateCodeChange}
                              handleSubmit = {this.handleSubmit}
                              parks = {this.state.parks}
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

