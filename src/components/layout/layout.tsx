import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import Header from '../header'

export const Layout: React.FunctionComponent = props =>
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
    </Head>      
    <Header/>
    <main>
      {props.children ?? <></>}
    </main>
  </>
