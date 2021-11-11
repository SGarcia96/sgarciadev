import styles from './Hero.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import SocialItem from './SocialItem'

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <h1 className={styles.title}>Steven García</h1>
      <h2 className={styles.subtitle}>Software Engineer</h2>
      <div className={styles.hero_social}>
        <SocialItem
          href="https://www.linkedin.com/in/sgarciadev/?locale=en_US"
          Icon={<FaLinkedin />}
          name="linkedin"
        />
        <SocialItem
          href="https://github.com/SGarcia96"
          Icon={<FaGithub />}
          name="github"
        />
      </div>
    </section>
  )
}

export default Hero
