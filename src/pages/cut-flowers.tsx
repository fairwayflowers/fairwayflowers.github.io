import Head from 'next/head'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GalleryImage from '../components/gallery-image'

export default function CutFlowers() {
  return (
    <>
      <Head>
        <title>Fairway Flowers - Cut Flowers</title>
      </Head>
      <Container>
        <Row className="justify-content-sm-center">
          <Col sm={8}>
            <h1>Cut Flowers</h1>
            <p>Freshly cut and conditioned, ready to use flowers available for your own arrangements and projects, available by the bucket. We can provide assorted stems for florists, independents and flower groups - suitable for events or your own personal use.</p>
            <p>No request is too small, so contact us now!</p>
          </Col>
        </Row>
        <Row>
          {[...Array(16).keys()]
            .map((i: number) =>
              GalleryImage({ imagePath: "/images/cut-flowers/gallery/" + i.toString().padStart(4, "0") + ".jpg" })
            )}
        </Row>
      </Container>
    </>
  )
}
