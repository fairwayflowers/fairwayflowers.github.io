import React from 'react'
import HeaderNav from '../components/navigation'
import styles from '../styles/core.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <HeaderNav pageTitle="Fairway Flowers - Contact"></HeaderNav>
      <h1>Contact Us</h1>
      <p>Want to order flowers or petal confetti? Please get in touch with us to find out more. </p>
      <p>Email: fairwayflowers@gmail.com</p>
      <p>Instagram: @fairwayflowers</p>
      <p>Etsy: FairwayFlowersShop</p>
    </div>
  )
}
