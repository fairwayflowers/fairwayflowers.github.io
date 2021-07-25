import Head from 'next/head'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Fairway Flowers - Contact</title>
      </Head>
      <Container>
        <Row className="my-4 justify-content-sm-center">
          <Col sm={8}>
            <h1>Contact Us</h1>
            <p>Want to order flowers or petal confetti? Please get in touch with us to find out more. </p>
            <p>Email: fairwayflowers@gmail.com</p>
            <p>Instagram: @fairwayflowers</p>
            <p>Etsy: FairwayFlowersShop</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
