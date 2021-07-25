import Head from 'next/head'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import styles from './index.module.css'

export default function Workshops() {
  return (
    <>
      <Head>
        <title>Fairway Flowers - Workshops</title>
      </Head>
      <Container>
        <Row className="my-4 justify-content-sm-center">
          <Col sm={8}>
            <h1>Workshops</h1>
            <p>One to one or group workshops available at your home, event venue or in our own idyllic spot in the Cotswolds.</p>
            <p>Contact us now to make your booking.</p>
          </Col>
        </Row>
        <Row className="my-4 justify-content-sm-center">
          <Col sm={4} className="text-center">
            {IndexImage("/images/workshops/flower_crowns.jpg", "Flower Crowns")}
            <h3>Flower Crowns</h3>
          </Col>
          <Col sm={4} className="text-center">
            {IndexImage("/images/workshops/wreaths.jpg", "Wreaths")}
            <h3>Wreaths</h3>
          </Col>
          <Col sm={4} className="text-center">
            {IndexImage("/images/workshops/hand_bouquets.jpg", "Hand Tied Bouquets")}
            <h3>Hand Tied Bouquets</h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}

function IndexImage(imagePath: string, altText: string){
  return (
    <div className={styles.indexImageContainer}>
      <Image src={imagePath} alt={altText ?? ""} layout="fill" className={styles.indexImage}/>
    </div>
  )
}