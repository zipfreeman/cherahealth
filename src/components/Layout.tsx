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

            <footer>
                <a
                    href='https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Powered by <img src='/zeit.svg' alt='ZEIT Logo' />
                </a>
            </footer>
        </div>
    )
}
