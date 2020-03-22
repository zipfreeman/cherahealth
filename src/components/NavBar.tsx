import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Link from 'next/link'

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

export const NavBar = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link href='/'>
                        <Typography variant='h6' className={classes.title}>
                            Home
                        </Typography>
                    </Link>
                    <Link href='/donations'>
                        <Typography variant='h6' className={classes.title}>
                            Donate
                        </Typography>
                    </Link>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
