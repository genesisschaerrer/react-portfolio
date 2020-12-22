import React, { Component } from "react"


import PortfolioItem from "./portfolio-item"

export default class PorfolioContainer extends Component{
    constructor(){
        super()
        console.log('portfolio container has rendered')
    }

    PortfolioItems() {
        const data = ['Washington County School District', 'Autism Solutions', 'Dixie State University', 'Enact Teamworks']

        return data.map(item => {
            return <PortfolioItem />
        })
    }

    render() {
        return (
            <div>
                <h2>Portfolio items go here</h2>

                {this.PortfolioItems()}
            </div>  
        )
    }
}
