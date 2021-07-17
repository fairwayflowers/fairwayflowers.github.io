import Head from 'next/head'
import React from 'react'
import HeaderNav from '../components/header'
import styles from '../styles/core.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fairway Flowers - Workshops</title>
      </Head>
      <h1>Workshops</h1>
      <p>One to one or group workshops available at your home, event venue or in our own idyllic spot in the Cotswolds.</p>
      <p>Contact us now to make your booking.</p>
      <h3>Flower Crowns</h3>
      <h3>Wreaths</h3>
      <h3>Hand tied bouquets</h3>
    </>
  )
}
