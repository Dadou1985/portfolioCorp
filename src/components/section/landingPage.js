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
            alignItems: "center"
        }}>
            
        </div>
    )
}

export default LandingPage