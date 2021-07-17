import * as React from 'react'
import Head from 'next/head'
import { CssBaseline } from '@material-ui/core'
import Header from '../header'

export const Layout: React.FunctionComponent = props =>
  <div id="layout">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      <CssBaseline />
    </Head>
    <Header/>
    <main>
      {props.children}
    </main>
  </div>
