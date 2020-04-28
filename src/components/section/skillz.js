import React from 'react'
import Rubix from '../../images/rubix.png'
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import LooksThreeIcon from '@material-ui/icons/Looks3';

const Skillz = () => {
    return (
        <div style={{
            display: "flex",
            flexFlow: "column",
            height: "600px",
            padding: "2%",
            justifyContent: "space-around"
        }}>
            <h1 style={{textAlign: "center", fontSize: "60px", filter: "drop-shadow(5px 5px 2px black)", color: "grey"}}>Le Skills Cube Mindset</h1>
            <div style={{
                display: "flex",
                flexFlow: "row",
                padding: "5%",
                justifyContent: "space-around"
            }}>
                <img src={Rubix} alt="rubix" style={{
                    width: "30%", 
                    filter: "drop-shadow(10px 20px 5px grey)"}} />
                    <hr style={{filter: "drop-shadow(2px 2px 2px black)"}} />
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
                        <LooksOneIcon style={{width: "20%", height: "50%", filter: "drop-shadow(10px 10px 2px black)", color: "darkred"}} />
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
                        <LooksTwoIcon style={{width: "20%", height: "50%", filter: "drop-shadow(10px 10px 2px black)", color: "darkred"}} />
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
                        <LooksThreeIcon style={{width: "20%", height: "50%", filter: "drop-shadow(10px 10px 2px black)", color: "darkred"}} />
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