import { NavBar } from './NavBar'
import Head from 'next/head'

export const Layout = (props: { children: JSX.Element }) => {
    return (
        <div className='container'>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <NavBar />
            {props.children}
        </div>
    )
}
