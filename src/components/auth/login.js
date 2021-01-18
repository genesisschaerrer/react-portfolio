import React, { Component } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: "",
            errorText: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            //can't use dot syntax in an object key you need to wrap it in an array
            [e.target.name]: e.target.value,
            errorText: ""
        })
    }

    handleSubmit = (e) => {
        axios
            .post("https://api.devcamp.space/sessions", 
                {client: {
                    email: this.state.email,
                    password: this.state.password
                }
                },
                {withCredentials: true}
            )

            .then(response => {
                if(response.data.status === "created"){
                    this.props.handleSuccessfulLogin()
                } else {
                    this.setState({
                        errorText: "Wrong email or password"
                    })
                    this.props.handleUnSuccessfulAuth()
                }
            })
            .catch(error => {
                this.setState({
                    errorText: "An error Occured"
                })
                this.props.handleUnSuccessfulAuth()
            })
            e.preventDefault()
    }


    render() {
        return (
            <div>
                <h1>LOGIN TO ACCES YOUR DASHBOARD</h1>

                <div>{this.state.errorText}</div>

                <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
                    <div className="form-group">
                        <FontAwesomeIcon icon="envelope" />
                        <input 
                        type="email"
                        name="email"
                        placeholder="your email"
                        value={this.state.email}
                        onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <FontAwesomeIcon icon="lock" />
                        <input 
                        type="password"
                        name="password"
                        placeholder="your password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                    </div>

                    <button className="btn" type="submit">Login</button>       
                </form>
            </div>
        )
    }
}