import Head from 'next/head'
import React from 'react'
import { Col, Container, Row, Image} from 'react-bootstrap'
import FeatureImage from '../components/feature-image'

export default function About() {
  return (
    <>
      <Head>
        <title>Fairway Flowers - About</title>
      </Head>
      <FeatureImage image="/images/about/splash.jpg">
        <h1>About</h1>
      </FeatureImage>
      <Container>
        <Row className="justify-content-sm-center">
          <Col sm={6}>
            <Image src="/images/about/Barbara_Martin_At_Hawkesbury_Show.jpeg" fluid rounded/>
          </Col>
        </Row>
        <Row className="justify-content-sm-center">
          <Col sm={6}>
          <h2>It all started when…</h2>
          <p>Based in the heart of the Cotswolds, in the little town of Wotton Under Edge. Founded from a love of flowers and everything about them, Fairway Flowers is dedicated to providing the very best for your needs.</p>
          <p>This small cut-flower business can provide everything from buckets of flowers for your own do-it-yourself arrangements, to dried petal confetti or providing a bespoke service for your occasions.</p>
          </Col>
        </Row>
      </Container>

    </>
  )
}
