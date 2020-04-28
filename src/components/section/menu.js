import React from 'react'
import { Button, Drawer, toggleDrawer } from '@material-ui/core'

export default function menu() {
    return (
        <div>
            <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
                </Drawer>
            </React.Fragment>
        </div>
    )
}
