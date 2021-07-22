import Head from 'next/head'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GalleryImage from '../components/gallery-image'

export default function PetalConfetti() {
  return (
    <>
      <Head>
        <title>Fairway Flowers - Petal Confetti</title>
      </Head>
      <Container>
        <Row className="justify-content-sm-center">
          <Col sm={8}>
            <h1>Petal Confetti</h1>
            <p>Many types and varieties are available, purchasable by the pint - with one pint being equivalent to around 5-6 standard cones. We can mix colours or varieties as you desire to give you that special photographic moment to treasure. All our confetti is grown locally, before being hand picked and carefully dried.</p>
            <p>Contact us to find out more, alternatively you can order directly from our etsy page.</p>
          </Col>
        </Row>
        <Row>
          {[...Array(16).keys()]
            .map((i: number) =>
              GalleryImage({ imagePath: "/images/petal-confetti/gallery/" + i.toString().padStart(4, "0") + ".jpg" })
            )}
        </Row>
      </Container>
    </>
  )
}
