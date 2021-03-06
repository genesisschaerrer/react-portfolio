import React, { Component } from "react"
import {Link} from "react-router-dom"

export default class PortfolioItem extends Component {
    constructor(props){
        super(props)

        this.state = {
            PortfolioItemCalss: ""
        }
    }

    handleMouseEnter = () => {
        this.setState({PortfolioItemCalss: "image-blur"})
    }

    handleMouseLeave = () => {
        this.setState({PortfolioItemCalss: ""})
    }

    render(){
        const {id, category, thumb_image_url, logo_url} = this.props.item
        return (
            <Link to={`/portfolio/${id}`}>
            <div className="portfolio-item-wrapper"
            onMouseEnter={() => this.handleMouseEnter()}
            onMouseLeave={() => this.handleMouseLeave()}
            >
        
                <div 
                className={"portfolio-img-background " + this.state.PortfolioItemCalss}
                style= {{
                    backgroundImage: "url("+ thumb_image_url+")"
                }} />
                
                <div className="img-text-wrapper">
                    <div className="logo-wrapper">
                        <img src={logo_url} />
                    </div>

                    <div className="subtitle">
                        {category}
                    </div>
                </div>
            </div>
            </Link>
            )
        }
}