import React from 'react'
import Desk from '../../images/desk.jpg'

const LandingPage = () => {
    return (
        <div style={{
            backgroundImage: `url(${Desk})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "10px",
            height: "640px",
            display: "flex",
            flexFlow: "column wrap",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "larger",
            color: "lightgrey"
        }}>
            <h1  style={{textAlign: "center", fontSize: "80px", filter: "drop-shadow(5px 5px 2px black)"}}>Programing is the New Hype</h1>
            <p>I'm a web developer</p>
        </div>
    )
}

export default LandingPage