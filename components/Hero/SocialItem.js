import styles from './Hero.module.css'

const SocialItem = ({ href, Icon, name }) => {
  return (
    <a
      className={styles.social_item}
      href={href}
      target="_blank"
      rel="noopener noreferrer">
      <div className={styles.social_item__group}>
        {Icon}
        <span className={styles.social_name}>{name}</span>
      </div>
    </a>
  )
}

export default SocialItem
