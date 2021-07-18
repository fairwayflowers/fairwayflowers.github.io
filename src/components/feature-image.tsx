import styles from './FeatureImage.module.css'

interface FeatureImageProps {
    image: string,
    children?: React.ReactNode
}

export default function FeatureImage(props: FeatureImageProps) {
    return (
    <div className={styles.headerImageContainer}>
        <img src={props.image} className={styles.headerImage} />
        {props.children != undefined &&
            <div className={styles.headerImageBanner}>
                {props.children ?? <></>}
            </div>
        }
    </div>
    )
}