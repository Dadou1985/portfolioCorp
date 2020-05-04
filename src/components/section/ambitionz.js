import React from 'react'
import Futur from '../../images/bizPlan.jpg'

const Ambitionz = () => {
    return (
        <div id="motivationz" style={{
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
            justifyContent: "center",
            padding: "8%",
            fontSize: "large"
            }}>
                <h2>Ambitions et Motivations</h2>
                <p>Quel développeur n'embrasse pas le rêve de développer un jour l'application de demain ? C'est cette ambition 
                    qui <i>drive</i> certains d'entre nous à repousser leurs limites en veillant sans cesse à faire 
                    évoluer leur <i>learning curve</i>. Me concernant, je n'ai jamais engrengé autant de connaissances et je n'ai 
                    jamais été aussi motivé que lorsque je prenais part à un projet que j'aurais aimé développer moi-même.
                </p>
            </div>
            <img src={Futur} alt="futur" style={{width: "50%",height: "100%", filter: "grayscale()"}} />
        </div>
    )
}

export default Ambitionz