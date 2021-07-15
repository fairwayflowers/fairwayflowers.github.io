import React from 'react'
import { HeaderNav } from '../components/navigation'
import styles from '../styles/core.module.css'

export default function About() {
  return (
    <div className={styles.container}>
    <HeaderNav pageTitle="Fairway Flowers - About"></HeaderNav>
      <h1>It all started when…</h1>
      <p>Based in the heart of the Cotswolds, in the little town of Wotton Under Edge. Founded from a love of flowers and everything about them, Fairway Flowers is dedicated to providing the very best for your needs.</p>
      <p>This small cut-flower business can provide everything from buckets of flowers for your own do-it-yourself arrangements, to dried petal confetti or providing a bespoke service for your occasions.</p>
    </div>
  )
}
