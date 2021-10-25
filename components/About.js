import styles from "../styles/Home.module.css"
import Skills from "./Skills"

const About = () => {
  return (
    <>
      <section className={styles.about_section}>
        <h3 className={styles.about_title}>About me</h3>
        <p>
          Hi! I&apos;m Steven, I am a software engineer from Spain who studied Software Engineering
          in UNED. I&apos;m an enthusiastic about Full Stack Development, AI, and Blockchain. My
          goal is make a better world, creating and improving solutions, developing a high quality
          code follows TDD/BDD, clean code, easy to maintain and extensible.
        </p>
      </section>
      <Skills />
    </>
  )
}

export default About
