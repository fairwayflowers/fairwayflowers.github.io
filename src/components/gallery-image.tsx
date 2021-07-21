import styles from './FeatureImage.module.css'
import { Col, Image } from 'react-bootstrap'
import React from 'react'

interface GalleryImageProp {
    imagePath: string
}

export default function GalleryImage(props: GalleryImageProp) {
    return (
      <Col sm={3}>
        <Image src={props.imagePath} thumbnail/>
      </Col>
    )
}