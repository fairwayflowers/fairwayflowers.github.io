import React from 'react'
import HeaderNav from '../components/navigation'
import styles from '../styles/core.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeaderNav pageTitle="Fairway Flowers - Petal Confetti"></HeaderNav>
      <h1>Petal Confetti</h1>
      <p>Many types and varieties are available, purchasable by the pint - with one pint being equivalent to around 5-6 standard cones. We can mix colours or varieties as you desire to give you that special photographic moment to treasure. All our confetti is grown locally, before being hand picked and carefully dried.</p>
      <p>Contact us to find out more, alternatively you can order directly from our etsy page.</p>
    </div>
  )
}
