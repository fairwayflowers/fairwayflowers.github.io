import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import Header from '../header'

export const Layout: React.FunctionComponent = props =>
  <>
    <Header/>
    <main>
      {props.children ?? <></>}
    </main>
  </>
