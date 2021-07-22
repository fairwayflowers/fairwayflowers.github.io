import Head from 'next/head'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GalleryImage from '../components/gallery-image'

export default function Events() {
  return (
    <>
      <Head>
        <title>Fairway Flowers - Events</title>
      </Head>
      <Container>
        <Row className="justify-content-sm-center">
          <Col sm={8}>
            <h1>Events</h1>
            <p>New copy and pictures?</p>
          </Col>
        </Row>
        <Row>
          {[...Array(4).keys()]
            .map((i: number) =>
              GalleryImage({ imagePath: "/images/events/gallery/" + i.toString().padStart(4, "0") + ".jpg" })
            )}
        </Row>
      </Container>
    </>
  )
}
