import React from 'react'
import Motivationz from '../../images/apple.jpg'

const Skillz = () => {
    return (
        <div id="skillz" style={{
            display: "flex",
            flexFlow: "column",
            height: "650px",
            padding: "2%",
            justifyContent: "space-around"
        }}>
            <h1 style={{textAlign: "center", fontSize: "60px", filter: "drop-shadow(5px 5px 2px black)", color: "grey"}}>Birth of a Legend</h1>
            <div style={{
                display: "flex",
                flexFlow: "row",
                padding: "5%",
                justifyContent: "space-around"
            }}>
                <img src={Motivationz} alt="motivation" style={{
                    width: "40%", 
                    filter: "drop-shadow(10px 20px 5px grey)"}} />
                    <hr />
                <div style={{
                    display: "flex",
                    flexFlow: "column",
                    width: "50%",
                    justifyContent: "space-around"
                }}>
                    <div style={{
                        display: "flex",
                        flexFlow: "row",
                        height: "30%",
                        alignItems: "center"}}>
                        <div style={{
                            display: "flex",
                            flexFlow: "column"
                        }}>
                            La technologie actuelle est en train de changer notre rapport à l'impossible. Nous venons d'entrer
                            dans une ère où la connaissance et l'information constitueront l'économie de demain. Un monde où les 
                            frontières s'effondreront sous l'effet d'un simple "click". 
                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexFlow: "row",
                        height: "30%",
                        alignItems: "center"}}>
                        <div style={{
                            display: "flex",
                            flexFlow: "column"
                        }}>
                            Tous les jours, de nouveaux métiers se créent, de nouveaux services apparaissent, de nouveaux talents
                            émergent élargissant ainsi le champs des possibilités au plus grand nombre.                       
                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexFlow: "row",
                        height: "30%",
                        alignItems: "center"}}>
                        <div style={{
                            display: "flex",
                            flexFlow: "column"
                        }}>
                            Un horizon d'opportunités s'offrent à ceux qui souhaitent s'emparer de leur destin pour écrire 
                            leur propre légende. Certains deviendront explorateurs de l'espace, alchimistes quantiques ou
                            bâtisseurs d'édifices industriels mais seuls les meilleurs d'entre eux deviendront Développeurs.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skillz