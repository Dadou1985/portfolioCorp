import React from 'react'
import  Notel from '../../images/Notel.png'
import  Money from '../../images/moneyflight.png'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
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
                            <OverlayTrigger
                            placement="right"
                            overlay={
                            <Tooltip id="title">
                                <h3>Notel</h3>
                                <p>Le projet <i>Notel</i> a pour objet d'optimiser la collaboration et la communication du personnel
                                hôtelier en réception.</p>
                                <p>Le projet est en cours de réalisation.</p>
                                <p><b>Après avoir cliqué sur le lien, inscrivez-vous pour accéder à la plateforme.</b></p>
                            </Tooltip>
                            }>
                                <img src={Notel} alt="notel" style={{
                                width: "70%", 
                                height: "100%",
                                filter: "drop-shadow(10px 20px 5px grey)"}} />
                            </OverlayTrigger>
                    </a>
                    <a href="https://www.moneyflight.fr/" target="_blank" style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%"}} className="projet">
                            <OverlayTrigger
                            placement="left"
                            overlay={
                            <Tooltip id="title">
                                <h3>Money Flight</h3>
                                <p>Le projet <i>Money Flight</i> a pour objet d'offrir, aux voyageurs victimes
                                d'un retard ou d'une annuation de vol, une interface leur proposant d'effectuer toutes
                                les démarches en vue d'obtenir une indemnisation auprès des compagnies aériennes.</p>
                            </Tooltip>
                            }>
                                <img src={Money} alt="notel" style={{
                                width: "70%", 
                                height: "100%",
                                filter: "drop-shadow(10px 20px 5px grey)"}} />
                            </OverlayTrigger> 
                    </a>
            </div>
        </div>
    )
}

export default Projet