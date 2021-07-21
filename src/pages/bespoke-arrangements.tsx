import Head from 'next/head'
import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import GalleryImage from '../components/gallery-image';



export default function BespokeArrangements() {
  return (
    <>
      <Head>
        <title>Fairway Flowers - Bespoke Arrangements</title>
      </Head>
      <Container>
        <Row className="justify-content-sm-center">
          <Col sm={8}>
            <h1>Bespoke Arrangements</h1>
            <p>Your unique floral vision created in stunning seasonal flowers - birthdays, weddings, sympathy or just because.</p>
            <p>We can provide a unique service for sympathy flowers where we can pick and arrange from your own garden.</p>
            <p>Get in touch to order your arrangements today.</p>
          </Col>
        </Row>
        <Row>
          {[...Array(36).keys()]
            .map((i: number) => 
              GalleryImage({ imagePath: "/images/bespoke-arrangements/gallery/" + i.toString().padStart(4 ,"0") + ".jpg"})
          )}
        </Row>
      </Container>
    </>
  )
}