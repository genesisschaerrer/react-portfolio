import React, { Component } from "react"


import PortfolioItem from "./portfolio-item"

export default class PorfolioContainer extends Component{
    constructor(){
        super()

        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title:'Washington County School District'},
                {title:'Autism Solutions'},
                {title:'Dixie State University'},
                {title:'Enact Teamworks'}
            ]
        }

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
    }

    PortfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={item.title}/>
        })
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.PortfolioItems()}

                <hr></hr>
                   <button onClick={this.handlePageTitleUpdate}></button>         
            </div>  
        )
    }
}
