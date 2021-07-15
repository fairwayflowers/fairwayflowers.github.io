import Head from "next/head";
import React from "react";

interface HeaderNavProperties {
    pageTitle: string
  }
  
export class HeaderNav extends React.Component<HeaderNavProperties> {
    render() {
      return (      
        <Head>
            <title>{this.props.pageTitle}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
      )
    }
}