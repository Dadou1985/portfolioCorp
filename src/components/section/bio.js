import React from 'react'
import Statue from '../../images/statue8.png'
import Statue2 from '../../images/statue.png'
import {Paper} from "@material-ui/core"
import {Card} from 'react-bootstrap'


const Bio = () => {
    return (
        <div style={{
            display: "flex",
            flexFlow: "column",
            height: "600px",
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
                    }}>
                    <Paper elevation={10}>
                        <Card.Body style={{
                            padding: "15%",
                            textAlign: "center",
                        }}>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                        </Card.Body>
                    </Paper>
                </Card>
                </div>
                <div style={{
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "center"
                }}>
                    <img src={Statue} alt="statue" style={{width: "50%", filter: "drop-shadow(10px 10px 2px grey)"}} />
                <Card style={{
                    marginRight: "4%",
                    marginLeft: "4%",
                    }}>
                    <Paper elevation={10}>
                        <Card.Body style={{
                            padding: "15%",
                            textAlign: "center",
                        }}>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                        </Card.Body>
                    </Paper>
                </Card>
                </div>
                <div style={{
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "center"
                }}>
                    <img src={Statue} alt="statue" style={{width: "50%", filter: "drop-shadow(10px 10px 2px grey)"}} />
                <Card style={{
                    }}>
                    <Paper elevation={10}>
                        <Card.Body style={{
                            padding: "15%",
                            textAlign: "center",
                        }}>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                        </Card.Body>
                    </Paper>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Bio