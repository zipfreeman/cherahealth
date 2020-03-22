import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import MuiLink from '@material-ui/core/Link'
import ProTip from '../src/components/examples/ProTip'
import Link from '../src/components/examples/Link'
import { Layout } from '../src/components/Layout'

export default function Index() {
    return (
        <Container maxWidth='sm'>
            <Box my={4}>
                <Typography variant='h4' component='h1' gutterBottom>
                    Next.js with TypeScript example
                </Typography>
                <Link href='/about' color='secondary'>
                    Go to the about page
                </Link>
                <ProTip />
                <Copyright />
            </Box>
        </Container>
    )
}

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <MuiLink color='inherit' href='https://material-ui.com/'>
                Your Website
            </MuiLink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}
