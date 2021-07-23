import styles from './GalleryImage.module.css'
import { Col } from 'react-bootstrap'
import React from 'react'
import Image from 'next/image'

interface GalleryImageProp {
    imagePath: string,
    altText?: string
}

export default function GalleryImage(props: GalleryImageProp) {
    //const image = require(props.imagePath);
    return (
      <Col xs={6} sm={4} md={3}>
          <div className={styles.galleryImageContainer}>
            <Image src={props.imagePath} alt={props.altText ?? ""} layout="fill" className={styles.galleryImage}/>
          </div>
      </Col>
    )
}