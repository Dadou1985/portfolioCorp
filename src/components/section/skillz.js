import React from 'react'
import Motivationz from '../../images/apple.jpg'

const Skillz = () => {
    return (
        <div id="skillz" style={{
            display: "flex",
            flexFlow: "column",
            height: "600px",
            padding: "2%",
            justifyContent: "space-around"
        }}>
            <h1 style={{textAlign: "center", fontSize: "60px", filter: "drop-shadow(5px 5px 2px black)", color: "grey"}}>A Nomad's Way of Life</h1>
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
                            La maîtrise des langages de base tel que HTML
                            et CSS me permettent de faire de l’intégration
                            de bonne qualité. Je poursuis actuellement
                            mon perfectionnement dans les technologies
                            type JavaScript, PHP ou SQL. 
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
                            La maîtrise des langages de base tel que HTML
                            et CSS me permettent de faire de l’intégration
                            de bonne qualité. Je poursuis actuellement
                            mon perfectionnement dans les technologies
                            type JavaScript, PHP ou SQL.                         </div>
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
                            La maîtrise des langages de base tel que HTML
                            et CSS me permettent de faire de l’intégration
                            de bonne qualité. Je poursuis actuellement
                            mon perfectionnement dans les technologies
                            type JavaScript, PHP ou SQL. 
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skillz