import React from "react"

import profilePicture from "../../../static/assets/images/bio/profile.jpg"
import LinkedIn from "../../../static/assets/images/bio/linkedIn.png"
import Github from "../../../static/assets/images/bio/github.png"



export default function (){
    const styles ={
        "textDecoration": "none",
        "marginTop": "2em",
        "letterSpacing": "1.5px",
        "fontSize": "1rem",
        "display": "flex",
        "alignItems": "center",
    }

    const styleMsg = {
        "letterSpacing": "2px",
        "textAlign": "center",
        "lineHeight": "1.6"
    }
    return (
        <div className='content-page-wrapper'>
            <div className="left-column"
            style={{
                background: "url("+ profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
            <div className="right-column">
                <div style={styleMsg} className="about-messege">
                Im a Front-End developer passionate about UX/UI in St. George Utah. I'm currently looking for an opportunity too expand my skills and bring my talents and experience to your team.
                </div>
                <a className="link" style={styles} target="_blank" href="https://www.linkedin.com/in/genesis-schaerrer-a27169165/" >
                   <img  style={{"width": "20px", marginRight: "4px"}} src={LinkedIn} /><div>LinkedIn</div>
                </a>
                <a className="link" style={styles} target="_blank" href="https://github.com/genesisschaerrer" >
                   <img  style={{"width": "20px", marginRight: "4px"}} src={Github} /><div>Github</div>
                </a>
            </div>
        </div>
    )
}