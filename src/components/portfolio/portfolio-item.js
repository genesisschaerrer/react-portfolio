import React from "react"
import {Link} from "react-router-dom"

export default function(props) {
return (
    <div>
        <h2>{`Worked: ${props.title}`}</h2>
        <h4>{`Website: ${props.url}`}</h4>

        <Link to= {`/portfolio/${props.slug}`} >Link</Link>
    </div>
)}