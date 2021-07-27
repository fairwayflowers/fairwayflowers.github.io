import Head from 'next/head'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from "next/link";

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
            <dl>
              <dt>Email:</dt>
              <dd>
                <Link href="mailto:fairwayflowers@gmail.com">
                  <a>fairwayflowers@gmail.com</a>
                </Link>
              </dd>
              <dt>Instagram:</dt>
              <dd>
                <Link href="https://www.instagram.com/fairwayflowers">
                  <a>@fairwayflowers</a>
                </Link>
              </dd>
              <dt>Etsy:</dt>
              <dd>
                <Link href="https://www.etsy.com/uk/shop/FairwayFlowersShop">
                  <a>FairwayFlowersShop</a>
                </Link>
              </dd>
            </dl>
          </Col>
        </Row>
      </Container>
    </>
  )
}
