import styles from "./About.module.css"
import Image from "next/image"

const About = () => {
  return (
    <section className={styles.about_section}>
      <div className={styles.about_content}>
        <div className={styles.about_avatar}>
          <Image
            priority
            src="/images/profile.jpg"
            className={styles.about_image}
            height={300}
            width={300}
            alt={"html"}
          />
        </div>
        <div className={styles.about_description}>
          <h3 className={styles.about_title}>About me</h3>
          <p>
            Hi! I&apos;m Steven, I am a software engineer from Spain who studied Software
            Engineering in UNED. I&apos;m an enthusiastic about Full Stack Development, AI, and
            Blockchain. My goal is make a better world, creating and improving solutions, developing
            a high quality code follows TDD/BDD, clean code, easy to maintain and extensible.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
