import Head from 'next/head'
import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import GalleryImage from '../components/gallery-image';
import FeatureImage from '../components/feature-image';



export default function BespokeArrangements() {
  return (
    <>
      <Head>
        <title>Fairway Flowers - Floristry Truck</title>
      </Head>

      <FeatureImage image="/images/flower-truck.jpg">
        <>
          <h1>Mini Floristry Truck</h1>
          <h2>Now available as a pop-up service</h2>
        </>
      </FeatureImage>
      <Container>
        <Row className="my-4 justify-content-sm-center">
          <Col sm={8}>
            <h3>Fresh Seasonal Flowers</h3>
            <p>Locally  grown where possible, always high quality.</p>
            <h3>Hand-tied Arrangements</h3>
            <p>Hand selected and thoughtfully arranged for you.</p>
            <h3>Perfect Gifts for Any Occasion</h3>
            <p>Celebrations, thank yous, event favours, or just because.</p>
            <h3>Event and Market Appearances</h3>
            <p>Find us at pop-ups, markets and events near you.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}