import React from 'react'
import { HeaderNav } from '../components/navigation'
import styles from '../styles/core.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <HeaderNav pageTitle="Fairway Flowers - Bespoke Arrangements"></HeaderNav>
      <h1>Bespoke Arrangements</h1>
      <p>Your unique floral vision created in stunning seasonal flowers - birthdays, weddings, sympathy or just because.</p>
      <p>We can provide a unique service for sympathy flowers where we can pick and arrange from your own garden.</p>
      <p>Get in touch to order your arrangements today.</p>
    </div>
  )
}
