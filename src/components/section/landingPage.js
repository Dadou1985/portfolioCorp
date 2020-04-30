import React from 'react'
import Desk from '../../images/desk.jpg'

const LandingPage = () => {
    return (
    <>
    
        <div id="landingPage" style={{
            backgroundImage: `url(${Desk})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "640px",
            display: "flex",
            flexFlow: "column wrap",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "larger",
            color: "lightgrey"
        }}>
            <h1  style={{fontFamily: "CormorantGaramond", textAlign: "center", fontSize: "80px", filter: "drop-shadow(5px 5px 2px black)"}}>Coding is the New Hype</h1>
            <h1  style={{textAlign: "center", fontSize: "40px", filter: "drop-shadow(5px 5px 2px black)"}}>Be smart</h1>
        </div>
    </>
    )
}

export default LandingPage