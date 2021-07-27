import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Footer.module.css'
import helperStyles from '../components/helper.module.css'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <hr/>
        <Row className="text-center">
          <Col>
            <Link href="mailto:fairwayflowers@gmail.com">
              <a className={helperStyles.linkUnstyled}>
                fairwayflowers@gmail.com
              </a>
            </Link>
          </Col>
          <Col>
            <Link href="https://www.instagram.com/fairwayflowers">
              <a className={helperStyles.linkUnstyled}>
                @fairwayflowers
              </a>
            </Link>
          </Col>
          <Col>
            <Link href="https://www.etsy.com/uk/shop/FairwayFlowersShop">
              <a className={helperStyles.linkUnstyled}>
                FairwayFlowersShop
              </a>
            </Link>
          </Col>
        </Row>
        <hr/>
      </Container>
    </footer>
  )
}