import styles from "./Hero.module.css"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <h1 className={styles.title}>Steven García</h1>
      <h2 className={styles.subtitle}>Software Engineer</h2>
      <div className={styles.hero_social}>
        <a
          className={styles.social_item}
          href="https://www.linkedin.com/in/sgarciadev/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a
          className={styles.social_item}
          href="https://github.com/SGarcia96"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </section>
  )
}

export default Hero
