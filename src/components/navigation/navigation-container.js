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
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/">Home</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/about-me">About</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/blog">Blog</NavLink>
                    </div>
                </div>

                <div className="right-side">
                    GENESIS SCHAERRER
                </div>
            </div>
        )
    }
}

export default NavigationContainer