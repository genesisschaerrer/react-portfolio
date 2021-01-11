import React, { Component } from "react"
import axios from "axios"

import PortfolioSideBarList from "../portfolio/portfolio-sidebar-list"
import PortfolioForm from "../portfolio/portfolio-form"


export default class PortfolioManager extends Component{
    constructor(){
        super()

        this.state = {
            portfolioItems: []
        }
        
    }

    handleSuccessfulFormSubmission = (portfolioItem) => {
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        })
    }

    handleFormSubmissionError = (error) => {
        console.log("handleFormSubmissionError ", error )
    }

    getPortfolioItems = () => {
        axios
            .get("https://genesisschaerrer.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {withCredentials: true})
            .then(res => {
                this.setState({
                    portfolioItems: [...res.data.portfolio_items]
                })
            })
            .catch(error => {console.log("error fetching portfolio items", error)})
    }

    componentDidMount(){
        this.getPortfolioItems()
    }

    render(){


        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <PortfolioForm 
                    handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                    handleFormSubmissionError={this.handleFormSubmissionError}
                    />
                </div>

                <div className="right-column">
                    <PortfolioSideBarList data={this.state.portfolioItems}/>
                   
                </div>
            </div>
        )
    }
}