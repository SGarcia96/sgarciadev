import styles from './Project.module.css'
import Image from 'next/image'

const ImageProject = ({ src, alt }) => {
  return (
    <div className={styles.image_container}>
      <Image
        priority
        src={src}
        className={styles.project_image}
        width={600}
        height={600}
        alt={alt}
      />
    </div>
  )
}

export default ImageProject
