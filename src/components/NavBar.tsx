import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Link from 'next/link'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { List, ListItem, ListItemText, Divider } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100vw',
    },
    menuButton: {},
    title: {
        flexGrow: 1,
    },
})

const MobileNavDrawer = ({ isOpen, handleToggle }: { isOpen: boolean; handleToggle(): void }) => {
    const classes = useStyles()

    return (
        <SwipeableDrawer anchor={'left'} open={isOpen} onOpen={handleToggle} onClose={handleToggle}>
            <List>
                <ListItem button key={'Home'}>
                    <Link href='/'>
                        <Typography variant='h6' className={classes.title}>
                            Home
                        </Typography>
                    </Link>
                </ListItem>
                <Divider />
                <ListItem button key={'Health & Educaiton'}>
                    <Link href='/health-education'>
                        <Typography variant='h6' className={classes.title}>
                            Health & Educaiton
                        </Typography>
                    </Link>
                </ListItem>
                <Divider />
                <ListItem button key={'Donate'}>
                    <Link href='/donate'>
                        <Typography variant='h6' className={classes.title}>
                            Donate
                        </Typography>
                    </Link>
                </ListItem>
            </List>
        </SwipeableDrawer>
    )
}

export const NavBar = () => {
    const classes = useStyles()
    const [isDrawerOpen, toggleDrawer] = useState(false)

    const handleMobileDrawer = () => {
        toggleDrawer(!isDrawerOpen)
    }

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'
                        onClick={handleMobileDrawer}
                    >
                        <MenuIcon />
                        <MobileNavDrawer isOpen={isDrawerOpen} handleToggle={handleMobileDrawer} />
                    </IconButton>

                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

interface NavLink {
    path: string
    title: string
}
const generateNavLinks = (props: { links: NavLink[] }) => {
    const classes = useStyles()

    return props.links.map(({ path, title }) => (
        <Link href={path}>
            <Typography variant='h6' className={classes.title}>
                {title}
            </Typography>
        </Link>
    ))
}

const DesktopNav = () => {
    const classes = useStyles()

    return (
        <>
            <Link href='/donate'>
                <Typography variant='h6' className={classes.title}>
                    Donate
                </Typography>
            </Link>
        </>
    )
}
