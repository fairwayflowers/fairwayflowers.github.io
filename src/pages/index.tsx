import Head from 'next/head'
import React from 'react'
import { HeaderNav } from '../components/navigation'
import styles from '../styles/core.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeaderNav pageTitle="Fairway Flowers"></HeaderNav>
      <h1>Fairway Flowers</h1>
      <h2>Cut Flowers, Petal Confetti and Arrangements</h2>
      <h3>Fairway Flowers gives individual care and attention to all your floral visions.</h3>
      <div>
        <h4>Cut Flowers</h4>
        <p>Hand selected from our private cutting garden, grown in the heart of the Cotswolds.</p>
      </div>
      <div>
        <h4>Petal Confetti</h4>
        <p>Biodegradable and environmentally friendly confetti to enhance your special day.</p>
      </div>
      <div>
        <h4>Bespoke Arrangements</h4>
        <p>Your unique floral vision created in stunning seasonal flowers.</p>
      </div>
      <div>
        <h4>Workshops</h4>
        <p>One-to-one or Group Workshops</p>
      </div>
      <div>
        <h4>Events</h4>
        <p>We can attend your events year round.</p>
      </div>
    </div>
  )
}
