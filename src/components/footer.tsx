import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <hr/>
        <Row className="text-center">
          <Col>
            fairwayflowers@gmail.com
          </Col>
          <Col>
            @fairwayflowers
          </Col>
          <Col>
            FairwayFlowersShop
          </Col>
        </Row>
        <hr/>
      </Container>
    </footer>
  )
}