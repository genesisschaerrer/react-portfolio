import { data } from "autoprefixer"
import React, { Component } from "react"


import PortfolioItem from "./portfolio-item"

export default class PorfolioContainer extends Component{
    constructor(){
        super()

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                {title:'Washington County School District', category: "Education"},
                {title:'Autism Solutions', category: "Education"},
                {title:'Dixie State University', category: "Higher Education"},
                {title:'Enact Teamworks', category: "Digital Marketing"}
            ]
        }

        this.handleFilter = this.handleFilter.bind(this)
    }

    handleFilter (filter) {
        this.setState({
            data: this.state.data.filter(i => {
                return i.category === filter
            })
        })
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
        if (this.state.isLoading){
            return <div>Loading...</div>
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                   <button onClick={()=> this.handleFilter('Education')}>Education</button> 
                   <button onClick={()=> this.handleFilter('Higher Education')}>Higher Education</button>  
                   <button onClick={()=> this.handleFilter('Digital Marketing')}>Digital Marketing</button>    

                   {this.PortfolioItems()}      
            </div>  
        )
    }
}
