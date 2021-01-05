import React, { Component } from "react"
import {NavLink} from "react-router-dom"



class NavigationContainer extends Component {
    constructor () {
        super ()
    }

    adminLinks () {

    }

    render(){
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/about-me">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </div>

                <div className="right-side">
                    GENESIS SCHAERRER
                </div>
            </div>
        )
    }
}

export default NavigationContainer