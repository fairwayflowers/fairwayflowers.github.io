import Head from 'next/head'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Workshops() {
  return (
    <>
      <Head>
        <title>Fairway Flowers - Workshops</title>
      </Head>
      <Container>
        <Row className="justify-content-sm-center">
          <Col sm={8}>
            <h1>Workshops</h1>
            <p>One to one or group workshops available at your home, event venue or in our own idyllic spot in the Cotswolds.</p>
            <p>Contact us now to make your booking.</p>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <h3>Flower Crowns</h3>
          </Col>
          <Col sm={4}>
            <h3>Wreaths</h3>
          </Col>
          <Col sm={4}>
            <h3>Hand Tied Bouquets</h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}
