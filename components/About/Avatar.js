import styles from './About.module.css'
import Image from 'next/image'

const Avatar = ({ src, alt }) => {
  return (
    <div className={styles.about_avatar}>
      <Image
        priority
        src={src}
        className={styles.about_image}
        height={300}
        width={300}
        alt={alt}
      />
    </div>
  )
}

export default Avatar
