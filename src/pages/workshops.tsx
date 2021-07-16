import React from 'react'
import HeaderNav from '../components/navigation'
import styles from '../styles/core.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeaderNav pageTitle="Fairway Flowers - Workshops"></HeaderNav>
      <h1>Workshops</h1>
      <p>One to one or group workshops available at your home, event venue or in our own idyllic spot in the Cotswolds.</p>
      <p>Contact us now to make your booking.</p>
      <h3>Flower Crowns</h3>
      <h3>Wreaths</h3>
      <h3>Hand tied bouquets</h3>
    </div>
  )
}
