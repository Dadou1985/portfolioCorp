import React from 'react'
import Office from '../../images/office.jpg'


const Contact = () => {
    return (
        <div style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            width: "100%",
            height: "500px",
            backgroundImage: `url(${Office})`,
            backgroundPositionY: "20%"
        }}>
            
        </div>
    )
}

export default Contact