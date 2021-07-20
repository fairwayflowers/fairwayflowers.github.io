import styles from './FeatureImage.module.css'
import { Image } from 'react-bootstrap'

interface FeatureImageProps {
    image: string,
    children?: React.ReactNode
}

export default function FeatureImage(props: FeatureImageProps) {
    return (
    <div className={styles.headerImageContainer}>
        <Image src={props.image} fluid />
        {props.children != undefined &&
            <div className={styles.headerImageBanner}>
                {props.children ?? <></>}
            </div>
        }
    </div>
    )
}