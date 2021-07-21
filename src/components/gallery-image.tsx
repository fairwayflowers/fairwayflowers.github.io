import styles from './GalleryImage.module.css'
import { Col } from 'react-bootstrap'
import React from 'react'

interface GalleryImageProp {
    imagePath: string
}

export default function GalleryImage(props: GalleryImageProp) {
    return (
      <Col xs={6} sm={4} md={3}>
          <div className={styles.galleryImageContainer}>
            <img src={props.imagePath} className={styles.galleryImage}/>
          </div>
      </Col>
    )
}