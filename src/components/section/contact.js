import React from 'react'
import { Button } from '@material-ui/core'
import Office from '../../images/office.jpg'


const Contact = () => {
    return (
        <div style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            height: "500px",
            backgroundImage: `url(${Office})`,
            backgroundPositionY: "40%",
            backgroundPositionX: "30%"
        }}>
            <div style={{
                display: "flex",
                flexFlow: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "5%",
                fontSize: "Larger",
                color: "grey"}}>
                <h1>Si notre présentation vous a séduit</h1>
                <Button variant="contained" color="secondary">Contactez-nous</Button>
                <div>
     
                </div>
            </div>
        </div>
    )
}

export default Contact