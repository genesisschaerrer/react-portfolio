import { data } from "autoprefixer"
import axios from "axios"
import React, { Component } from "react"


import PortfolioItem from "./portfolio-item"

export default class PorfolioContainer extends Component{
    constructor(){
        super()

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        }

        this.handleFilter = this.handleFilter.bind(this)
    }

    handleFilter (filter) {
        if(filter === "CLEAR_FILTERS"){
            this.getPortoflioItems()
        } else {
            this.getPortoflioItems(filter)
        }
    }

    getPortoflioItems = (filter = null) => {
        const axios = require('axios');
    
        // Make a request for a user with a given ID
        axios.get('https://genesisschaerrer.devcamp.space/portfolio/portfolio_items')
        .then(response => {
        // handle success
        if(filter){
            this.setState({
                data: response.data.portfolio_items.filter(i => {
                    return i.category === filter
                })
            })
        } else {
            this.setState({
                data: response.data.portfolio_items
            })
            }
        })
        .catch(error => {
        // handle error
        console.log(error);
        })
      }

    PortfolioItems() {
        //Data that we'll need:
        //-background image: thumb_image_ur;
        //-log
        //-description: description
        //-id: id
        //in console you can see all the keys of an object by calling Object.keys(object name)
        //["id", "name", "description", "url", "category", "position", "thumb_image_url", "banner_image_url", "logo_url", "column_names_merged_with_images"]
        return this.state.data.map(item => {
            //debugger
            return <PortfolioItem 
            key={item.id} 
            item={item}/>
        })
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        })
    }

    componentDidMount(){
        this.getPortoflioItems()
    }

    render() {
        if (this.state.isLoading){
            return <div>Loading...</div>
        }

        return (          
            <div className="homepage-wrapper">
                <div className="filter-links">
                    <button className="btn" onClick={()=> this.handleFilter('React')}>React</button> 
                    <button className="btn" onClick={()=> this.handleFilter('Python')}>Python</button>  
                    <button className="btn" onClick={()=> this.handleFilter('Design')}>Design</button> 
                    <button className="btn" onClick={()=> this.handleFilter('CLEAR_FILTERS')}>All</button> 
                </div>
                 <div className="portfolio-items-wrapper">
                    {this.PortfolioItems()}  
                </div> 
            </div>
            )
    }
}
