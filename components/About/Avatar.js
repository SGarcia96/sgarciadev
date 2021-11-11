import styles from './About.module.css'
import Image from 'next/image'
import profilePic from '../../public/images/profile.jpg'

const Avatar = ({ src, alt }) => {
  return (
    <div className={styles.about_avatar}>
      <Image
        priority
        src={profilePic}
        className={styles.about_image}
        height={300}
        width={300}
        alt={alt}
      />
    </div>
  )
}

export default Avatar
