import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'

const Navigation = () => {
    return (
        <div>
            <AppBar style={{backgroundColor: "white", color: "grey"}}>
                <Toolbar>
                    <LocalLibraryIcon />
                    My Portfolio
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navigation