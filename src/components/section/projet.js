import React from 'react'
import  Notel from '../../images/Notel.png'
import  Money from '../../images/moneyflight.png'


const Projet = () => {
    return (
        <div style={{
            display: 'flex',
            flexFlow: "column",
            justifyContent: "space-around",
            width: "100%",
            height: "600px"}}>
            <h1 style={{
                textAlign: "center", 
                fontSize: "60px", 
                filter: "drop-shadow(5px 5px 2px black)", 
                color: "grey", 
                width: "100%"}}>Projets et Réalisations
            </h1>
            <div style={{
                display: 'flex',
                flexFlow: "row",
                justifyContent: "space-around",
                width: "100%",
                height: "300px"}}>
                    <img src={Notel} alt="notel" style={{
                    width: "40%", 
                    height: "100%",
                    filter: "drop-shadow(10px 20px 5px grey)"}} />
                    <img src={Money} alt="notel" style={{
                    width: "40%", 
                    height: "100%",
                    filter: "drop-shadow(10px 20px 5px grey)"}} />
            </div>
        </div>
    )
}

export default Projet