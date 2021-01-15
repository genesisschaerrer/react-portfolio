import React, {Component} from "react"
import axios from "axios"

import RichTextEditor from "../rich-text-editor"


export default class BlogForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: "", 
            blog_status: ""
        }
    }

    buildForm(){
        let formData = new FormData()

        formData.append("portfolio_blog[title]", this.state.title)
        formData.append("portfolio_blog[status]", this.state.status)

        return formData
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        axios
        .post('https://genesisschaerrer.devcamp.space/portfolio/portfolio_blogs', this.buildForm(), {withCredentials: true})
        .then(response => {
            this.props.handleSuccessfullFormSubmission(response.data.portfolio_blog)

        }).catch(error => {
            console.log("handleSubmit for blogg error: ", error)
        })

        event.preventDefault()

    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
                <div className="two-column">
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
                 </div>

                    <div className="one-column">
                        <RichTextEditor />
                    </div>

                <button className="btn">Save</button>
            </form>
            
        )
    }
}