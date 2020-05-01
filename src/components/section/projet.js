import React from 'react'
import  Notel from '../../images/Notel.png'
import  Money from '../../images/moneyflight.png'
import '../css/projet.css'


const Projet = () => {

    return (
        <div id="projet" style={{
            display: 'flex',
            flexFlow: "column",
            justifyContent: "space-around",
            width: "100%",
            height: "650px"}}>
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
                    <a href="https://notel-765b1.web.app/" target="_blank" style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%"}} className="projet">
                        <img src={Notel} alt="notel" style={{
                        width: "70%", 
                        height: "100%",
                        filter: "drop-shadow(10px 20px 5px grey)"}} />
                    </a>
                    <a href="https://www.moneyflight.fr/" target="_blank" style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%"}} className="projet"> 
                        <img src={Money} alt="notel" style={{
                        width: "70%", 
                        height: "100%",
                        filter: "drop-shadow(10px 20px 5px grey)"}} />
                    </a>
            </div>
        </div>
    )
}

export default Projet