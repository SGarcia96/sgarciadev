import styles from './About.module.css'
import Avatar from './Avatar'

const About = () => {
  return (
    <section className={styles.about_section}>
      <div className={styles.about_content}>
        <h2 className={styles.about_title}>About me</h2>
        <Avatar
          src="/images/profile.jpg"
          alt="Steven García Avatar"
        />
        <div className={styles.about_description}>
          <h3 className={styles.title_text}>Profile</h3>
          <p>
            Hi! I&apos;m Steven, I am a software engineer from Spain who studied Software
            Engineering in UNED. I&apos;m an enthusiastic about Full Stack Development, AI, and
            Blockchain. My goal is make a better world, creating and improving solutions, developing
            a high quality code follows TDD/BDD, clean code, easy to maintain and extensible.
          </p>
          <h3 className={styles.title_text}>What can I do?</h3>
          <p>
            <strong>Quickly adapt</strong> to whatever, I have used a wide range of languages, technologies and tools<br />
            <strong>Software architecture</strong> (microservices, SOAP). <br />
            <strong>Programming paradigms</strong> OOP, imperative, functional. <br />
            <strong>Design patterns</strong> MVC, MVVC, Dependency Injection... <br />
            <strong>Databases</strong> Administration and management of relational and non-relational. <br />
            <strong>Data structures and algorithms</strong> graphs, big O notation, analysis and cost improvement. <br />
            <strong>Soft skills</strong> Teamwork, Comunication, Multi-task... <br />
            <strong>Strong problem-solving skills.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
