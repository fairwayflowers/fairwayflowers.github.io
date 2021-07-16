import React from 'react'
import HeaderNav from '../components/navigation'
import styles from '../styles/core.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <HeaderNav pageTitle="Fairway Flowers - Cut Flowers"></HeaderNav>
      <h1>Cut Flowers</h1>
      <p>Freshly cut and conditioned, ready to use flowers available for your own arrangements and projects, available by the bucket. We can provide assorted stems for florists, independents and flower groups - suitable for events or your own personal use.</p>
      <p>No request is too small, so contact us now!</p>
    </div>
  )
}
