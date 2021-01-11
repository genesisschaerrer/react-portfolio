import React from "react"

const PortfolioSideBarList = (props) => {
    const portfolioList = props.data.map(portfolioItem => {
        return (
            <div key={portfolioItem.id} className="portfolio-item-thumb">
                <div className="portfolio-thumb-img">
                    <img src={portfolioItem.thumb_image_url} />
                </div>
                <h1 className="title">{portfolioItem.name}</h1>
                <h1>{portfolioItem.id}</h1>
            </div>
        )
    })

    return (
        <div>
            <h1 className="portfolio-sidebar-list-wrapper">{portfolioList}</h1>
        </div>
    )
}

export default PortfolioSideBarList