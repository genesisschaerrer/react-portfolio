import React, { Component } from "react"
import Login from "../auth/login"

import loginImage from "../../../static/assets/images/auth/login.jpg"

export default class Auth extends Component {
    constructor(props){
        super(props)

    }

    handleSuccessfulLogin = () => {
        this.props.handleSuccessfulLogin()
        this.props.history.push("/")
    }

    handleUnSuccessfulAuth = () => {
        this.props.handleUnSuccessfulLogin()
    }



    render(){
        return(
            <div className="auth-page-wrapper">
                <div 
                className="left-column" 
                style={{
                    backgroundImage: `url(${loginImage})`
                }} />
                <div className="right-column">
                    <Login 
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnSuccessfulAuth={this.handleUnSuccessfulAuth}
                    />
                </div>
            </div>
        )
    }
}