import styles from './Skills.module.css'
import Image from 'next/image'

const SkillItem = ({ src, alt, h, w, name }) => {
  return (
    <li className={styles.skills_item}>
      <Image
        priority
        src={src}
        className={styles.skills_image}
        height={h}
        width={w}
        alt={alt}
      />
      <span className={styles.skills_name}>{name}</span>
    </li>
  )
}

export default SkillItem
