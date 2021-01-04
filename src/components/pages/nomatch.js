import React from "react"
import {Link} from "react-router-dom"

export default function NoMatch(){
    return (
        <div>
            <h2>Page Not Found</h2>
            <Link to="/">Retrun To Homepage</Link>
        </div>
    )
}