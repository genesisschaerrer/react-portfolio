import React, { Component } from 'react';
import axios from "axios"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import NavigationContainer from "./navigation/navigation-container"
import Home from "./pages/home"
import About from './pages/about'
import Blog from './pages/blog'
import BlogDetail from "./pages/blog-detail"
import Contact from './pages/contact'
import PortfolioManager from "./pages/portfolio-manager"
import PortfolioDetail from "./portfolio/portfolio-detail"
import Auth from "./pages/auth"
import NoMatch from "./pages/nomatch"

library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle)


export default class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      loggedInStatus: "NOT_LOGGED_IN"
    }
  }

  handleSuccessfulLogin = () => {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnSuccessfulLogin = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  handleUnSuccessfulLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus = () => {
    return axios.get("https://api.devcamp.space/logged_in", {withCredentials: true})
      .then(response => {
        const loggedIn = response.data.logged_in
        const loggedInStatus = this.state.loggedInStatus

        // If loggedIn and status LOGGED_IN => return data
        // If loggedIn status NOT_LOGGED_IN => update state
        // If not loggedIn and status LOGGED_IN => update state

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          })
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          })
        }
      })
      .catch(error => {
        console.log("Error", error)
      })
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  authorizedPages = () => {
    return [
      <Route key={"portfolio-manage"} path="/portfolio-manager" component={PortfolioManager}/>
    ]
  }


  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer 
            loggedInStatus={this.state.loggedInStatus}
            handleUnSuccessfulLogout={this.handleUnSuccessfulLogout}
            />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route 
              path="/auth" 
              //render props is used in order to give the child component the props of the
              render={props => (
                  <Auth 
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                    />
                  )
              }
              />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/b/:slug" component={BlogDetail} />
              {this.state.loggedInStatus === "LOGGED_IN"? this.authorizedPages(): null }
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
