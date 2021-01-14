import React, {Component} from "react"

export default class BlogForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: "", 
            blog_status: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSuccessfullFormSubmission(this.state)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                 type="text" 
                 onChange={this.handleChange} 
                 name="title"
                 placeholder="Enter blog title"
                 value={this.state.title}
                 />
                
                <input
                 type="text" 
                 onChange={this.handleChange} 
                 name="blog_status"
                 placeholder="Enter blog status"
                 value={this.state.blog_status}
                 />
                <button>Save</button>
            </form>
        )
    }
}