import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Footer.module.css'
import helperStyles from '../components/helper.module.css'
import Link from "next/link";
import {
  IconDefinition,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab)
library.add(fas)

const emailIconDefinition: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'envelope-square' })

const instagramIconDefinition: IconDefinition = findIconDefinition({ prefix: 'fab', iconName: 'instagram' })

const shoppingIconDefinition: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'shopping-bag' })

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <hr/>
        <Row className="text-center">
          <Col md={4}>
            <Link href="mailto:fairwayflowers@gmail.com">
              <a className={helperStyles.linkUnstyled}>
              <FontAwesomeIcon icon={emailIconDefinition} /> fairwayflowers@gmail.com
              </a>
            </Link>
          </Col>
          <Col md={4}>
            <Link href="https://www.instagram.com/fairwayflowers">
              <a className={helperStyles.linkUnstyled}>
              <FontAwesomeIcon icon={instagramIconDefinition} /> @fairwayflowers
              </a>
            </Link>
          </Col>
          <Col md={4}>
            <Link href="https://www.etsy.com/uk/shop/FairwayFlowersShop">
              <a className={helperStyles.linkUnstyled}>
              <FontAwesomeIcon icon={shoppingIconDefinition} /> FairwayFlowersShop
              </a>
            </Link>
          </Col>
        </Row>
        <hr/>
      </Container>
    </footer>
  )
}