import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'


const Navigation = () => {
    return (
        <div>
            <AppBar style={{backgroundColor: "white", color: "grey"}}>
                <Toolbar>
                    <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%"}}>
                        <a href="#landingPage" className="text-secondary text-decoration-none" style={{
                            display: "flex",
                            justifyContent: "space-around",
                            width: "10%",
                        }}>
                            <LocalLibraryIcon />
                            My Portfolio
                        </a>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-around",
                            width: "50%"
                        }}>
                            <a href="#bio" className="text-secondary text-decoration-none">Biographie</a>
                            <a href="#skillz" className="text-secondary text-decoration-none">Nomad Life</a>
                            <a href="#motivationz" className="text-secondary text-decoration-none">Motivations</a>
                            <a href="#projet" className="text-secondary text-decoration-none">Projets et Réalisations</a>
                            <a href="#contact" className="text-secondary text-decoration-none">Contact</a>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navigation