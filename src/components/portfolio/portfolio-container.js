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
    }

    PortfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={item.title}/>
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.PortfolioItems()}
            </div>  
        )
    }
}
