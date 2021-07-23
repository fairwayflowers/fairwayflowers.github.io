import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout/layout'
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
}
export default MyApp
