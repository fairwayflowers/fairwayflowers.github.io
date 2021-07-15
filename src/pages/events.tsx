import React from 'react'
import { HeaderNav } from '../components/navigation'
import styles from '../styles/core.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <HeaderNav pageTitle="Fairway Flowers - Events"></HeaderNav>
      <h1>Events</h1>
      <p>New copy and pictures?</p>
    </div>
  )
}
