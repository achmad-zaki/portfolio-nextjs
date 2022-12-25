import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Portfolio Achmad Zaki" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
