import React, { Component } from "react"
import axios from "axios"

import PortfolioSideBarList from "../portfolio/portfolio-sidebar-list"
import PortfolioForm from "../portfolio/portfolio-form"


export default class PortfolioManager extends Component{
    constructor(){
        super()

        this.state = {
            portfolioItems: [],
            portfolioToEdit: {}
        }
        
    }

    handleEditClick(portfolioItem){
        this.setState({
            portfolioToEdit: portfolioItem
        })
    }

    handleDeleteClick= (portfolioItem) => {
        axios.delete(`https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, {withCredentials: true})
        .then(response => {
            this.setState({
                portfolioItems: this.state.portfolioItems.filter(item => {
                return item.id !== portfolioItem.id
                })
            })
        })
        .catch( error => {
            console.log("handleDelteClick error", error)
        })
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
                    <PortfolioSideBarList 
                    handleDeleteClick={this.handleDeleteClick}
                    data={this.state.portfolioItems}
                    handleEditClick={this.handleEditClick}
                    />
                   
                </div>
            </div>
        )
    }
}