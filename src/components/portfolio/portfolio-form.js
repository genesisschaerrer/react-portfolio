import axios from "axios"
import React, { Component} from "react"
import DropzoneComponent from "react-dropzone-component"

import "../../../node_modules/react-dropzone-component/styles/filepicker.css"
import "../../../node_modules/dropzone/dist/min/dropzone.min.css"


export default class PortfolioForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: "",
            description: "",
            category: "eCommerce",
            position: "",
            url: "",
            thumb_image: "",
            banner_image: "",
            logo: ""
        }

        this.thumbRef = React.createRef();
        this.bannerRef = React.createRef();
        this.logoRef = React.createRef();
    }

    componentDidUpdate(){
        if(Object.keys(this.props.portfolioToEdit).length > 0){
            const {
                id,
                name,
                description,
                category,
                position,
                url,
                thumb_image_url,
                banner_image_url,
                logo_url
            } = this.props.portfolioToEdit

            this.props.clearPortfolioToEdit()

            this.setState({
                id: id,
                name: name || "",
                description: description || "",
                category: category || "eCommerce",
                position: position || "",
                url: url || ""
            })
        }
    }

    handleThumbDrop = () => {
        return {
            addedfile: file => this.setState({ thumb_image: file })
        }
    }

    handleBannerDrop = () => {
        return {
            addedfile: file => this.setState({ banner_image: file })
        }
    }

    handleLogoDrop = () => {
        return {
            addedfile: file => this.setState({ logo: file })
        }
    }

    componentConfig = () => {
        return { 
          iconFiletypes: ['.jpg', '.png'],
          showFiletypeIcon: true,
          postUrl: "https://httpbin.org/post"
        }
    }

    djsConfig = () => {
        return {
            addRemoveLinks: true,
            maxFiles: 1
        }
    }

    buildForm = () => {
        let formData = new FormData()

        formData.append("portfolio_item[name]", this.state.name)
        formData.append("portfolio_item[description]", this.state.description)
        formData.append("portfolio_item[url]", this.state.url)
        formData.append("portfolio_item[category]", this.state.category)
        formData.append("portfolio_item[position]", this.state.position)

        if(this.state.thumb_image){
            formData.append("portfolio_item[thumb_image]", this.state.thumb_image)
        }

        if(this.state.banner_image){
            formData.append("portfolio_item[banner_image]", this.state.banner_image)
        }

        if(this.state.logo){
            formData.append("portfolio_item[logo]", this.state.logo)
        }

        return formData
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://genesisschaerrer.devcamp.space/portfolio/portfolio_items", 
        this.buildForm(), 
        {withCredentials: true})
        .then(response => {
            this.props.handleSuccessfulFormSubmission(response.data.portfolio_item)

            this.setState({
                    name: "",
                    description: "",
                    category: "eCommerce",
                    position: "",
                    url: "",
                    thumb_image: "",
                    banner_image: "",
                    logo: ""
            })

            const imageArray = [this.thumbRef, this.bannerRef, this.logoRef]

            imageArray.forEach(ref => {
                ref.current.dropzone.removeAllFiles()
            })
        })
        .catch(error => {
            console.log("portfolio form handleSubmit error ", error)
        })
    }

    render(){
        return(         
                <form onSubmit={this.handleSubmit} className="portfolio-form-wrapper">
                    <div className="two-column">
                        <input 
                        type="text" 
                        name="name"
                        placeholder="Portfolio Item Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />

                        <input 
                        type="text" 
                        name="url"
                        placeholder="URL"
                        value={this.state.url}
                        onChange={this.handleChange}
                        />  
                    </div>

                    <div className="two-column">
                        <input 
                        type="text" 
                        name="position"
                        placeholder="Position"
                        value={this.state.position}
                        onChange={this.handleChange}
                        />

                        <select  
                        name="category"
                        className="select-element"
                        value={this.state.category}
                        onChange={this.handleChange}
                        >
                            <option value="eCommerce">eCommerce</option>
                            <option value="Scheduling">Scheduling</option>
                            <option value="Enterprise">Enterprise</option>
                        </select>

                    </div>
                    <textarea
                        className="one-column"
                        type="text" 
                        name="description"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        /> 
                    <div>

                        <div className="three-column">
                            <DropzoneComponent
                                ref={this.thumbRef}
                                config={this.componentConfig()}
                                djsConfig={this.djsConfig()}
                                eventHandlers={this.handleThumbDrop()}
                            >
                                <div className="dz-message">Thumbnail</div>
                            </DropzoneComponent>

                            <DropzoneComponent
                                ref={this.bannerRef}
                                config={this.componentConfig()}
                                djsConfig={this.djsConfig()}
                                eventHandlers={this.handleBannerDrop()}
                            > 
                            <div className="dz-message">Banner</div>
                            </DropzoneComponent>

                            <DropzoneComponent
                                ref={this.logoRef}
                                config={this.componentConfig()}
                                djsConfig={this.djsConfig()}
                                eventHandlers={this.handleLogoDrop()}
                            >
                                <div className="dz-message">Logo</div>
                            </DropzoneComponent>
                        </div>

                        <div>
                            <button type="submit" className="btn">Save</button>
                        </div>

                    </div>
                </form>
        )
    }
}