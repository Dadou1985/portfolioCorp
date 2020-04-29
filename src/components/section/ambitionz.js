import React from 'react'
import Futur from '../../images/bizPlan.jpg'

const Ambitionz = () => {
    return (
        <div style={{
            display: 'flex',
            flexFlow: "row",
            justifyContent: "space-between",
            width: "100%",
            height: "400px",
            backgroundColor: "lightgrey",
        }}>
            <div style={{
            display: 'flex',
            flexFlow: "column",
            padding: "8%",
            fontSize: "larger"
            }}>
                <p style={{}}>
                    La maîtrise des langages de base tel que HTML
                    et CSS me permettent de faire de l’intégration
                    de bonne qualité. Je poursuis actuellement
                    mon perfectionnement dans les technologies
                    type JavaScript, PHP ou SQL.
                    La maîtrise des langages de base tel que HTML
                    et CSS me permettent de faire de l’intégration
                    de bonne qualité. Je poursuis actuellement
                    mon perfectionnement dans les technologies
                    type JavaScript, PHP ou SQL.
                </p>
            </div>
            <img src={Futur} alt="futur" style={{width: "50%",height: "100%", filter: "grayscale()"}} />
        </div>
    )
}

export default Ambitionz