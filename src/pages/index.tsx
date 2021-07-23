import Head from 'next/head'
import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import FeatureImage from '../components/feature-image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fairway Flowers</title>
      </Head>
      <FeatureImage image="/images/bucket_of_flowers.JPG">
        <>
          <h1>Fairway Flowers</h1>
          <h2>Cut Flowers, Petal Confetti and Arrangements</h2>
        </>
      </FeatureImage>
      <Container>
        <Row className="justify-content-sm-center">
          <Col sm={8} className="text-center">
            <h3>Fairway Flowers gives individual care and attention to all your floral visions.</h3>
          </Col>
        </Row>
        <Row className="justify-content-sm-center text-center">
          <Col sm={4}>
            <Image alt="Cut Flowers" src="/images/cut_flowers.JPG" rounded fluid/>
            <h4>Cut Flowers</h4>
            <p>Hand selected from our private cutting garden, grown in the heart of the Cotswolds.</p>
          </Col>
          <Col sm={4}>
            <Image alt="Petal Confetti" src="/images/petal_confetti.jpg" rounded fluid/>
            <h4>Petal Confetti</h4>
            <p>Biodegradable and environmentally friendly confetti to enhance your special day.</p>
          </Col>
          <Col sm={4}>
            <Image alt="Bespoke Arrangements" src="/images/bespoke_arrangements.jpg" rounded fluid/>
            <h4>Bespoke Arrangements</h4>
            <p>Your unique floral vision created in stunning seasonal flowers.</p>
          </Col>
        </Row>
        <Row className="justify-content-sm-center text-center">
          <Col sm={4}>
            <Image alt="Workshops" src="/images/workshops.jpg" rounded fluid/>
            <h4>Workshops</h4>
            <p>One-to-one or Group Workshops</p>
          </Col>
          <Col sm={4}>
            <Image alt="Events" src="/images/events.jpg" rounded fluid/>
            <h4>Events</h4>
            <p>We can attend your events year round.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
