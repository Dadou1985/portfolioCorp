import React from 'react'
import Statue from '../../images/statue8.png'
import Statue2 from '../../images/statue.png'
import {Card} from 'react-bootstrap'


const Bio = () => {
    return (
        <div id="bio" style={{
            display: "flex",
            flexFlow: "column",
            height: "650px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
        }}>
           <div style={{
            display: "flex",
            flexFlow: "row",
            height: "100%",
            width: "80%",
            alignItems: "center", 
            padding: "2%"

        }}>
                <div style={{
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "center"
                }}>
                    <img src={Statue} alt="statue" style={{width: "50%", filter: "drop-shadow(10px 10px 2px grey)"}} />
                <Card style={{
                    marginRight: "2%",
                    filter: "drop-shadow(10px 10px 2px grey)"
                    }}>
                        <Card.Body style={{
                            padding: "15%",
                            textAlign: "center",
                        }}>
                        <Card.Title>Hard Work</Card.Title>
                        <Card.Text>
                            <i>"C'est une bonne chose de s'amuser et faire la fête mais pendant que certains passent leur temps à se divertir, d'autres s'instruisent, travaillent dur et sont en train de gagner."</i>
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Arnold Schwarzenegger</small>
                        </Card.Text>
                        </Card.Body>
                </Card>
                </div>
                <div style={{
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "center"
                }}>
                    <img src={Statue} alt="statue" style={{width: "50%", filter: "drop-shadow(10px 10px 2px grey)"}} />
                <Card style={{
                    filter: "drop-shadow(10px 10px 2px grey)",
                    marginRight: "2%",
                    marginLeft: "2%",
                    }}>
                        <Card.Body style={{
                            padding: "16%",
                            textAlign: "center",
                        }}>
                        <Card.Title>The Dream Catcher</Card.Title>
                        <Card.Text>
                            <i>"Draw a line in the distance as a purpose in your life and let your dreams drive you threw the night then keep walking until your feet bleed, that's the true meaning of a Dream Catcher."</i>
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Someone Somewhere Someday</small>
                        </Card.Text>
                        </Card.Body>
                </Card>
                </div>
                <div style={{
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "center"
                }}>
                    <img src={Statue} alt="statue" style={{width: "50%", filter: "drop-shadow(10px 10px 2px grey)"}} />
                <Card style={{
                    marginLeft: "2%",
                    filter: "drop-shadow(10px 10px 2px grey)"
                    }}>
                        <Card.Body style={{
                            padding: "15%",
                            textAlign: "center",
                        }}>
                        <Card.Title>Les Bananes et l'Argent</Card.Title>
                        <Card.Text>
                            <i>“Si vous offrez travail et affaires aux gens, ils choisiront de travailler parce que la plupart des gens ne savent pas qu’une entreprise peut rapporter plus d'argent qu’un salaire.”</i>
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Jack Ma</small>
                        </Card.Text>
                        </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Bio