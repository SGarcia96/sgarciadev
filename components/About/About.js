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
          <h3>Profile</h3>
          <p>
            Hi! I&apos;m Steven, I am a software engineer from Spain who studied Software
            Engineering in UNED. I&apos;m an enthusiastic about Full Stack Development, AI, and
            Blockchain. My goal is make a better world, creating and improving solutions, developing
            a high quality code follows TDD/BDD, clean code, easy to maintain and extensible.
          </p>
          <h3>What can I do?</h3>
          <p>
            <strong>quickly adapt</strong> to whatever, I have used a wide range such as Java, JavaScript, Python, C, C#, Spring, React, Angular, etc.<br />
            <strong>software architecture</strong> (microservices, SOAP). <br />
            <strong>several programming paradigms</strong> OOP, imperative, functional. <br />
            <strong>design patterns</strong> MVC, MVVC, Dependency Injection, etc. <br />
            <strong>databases</strong> Administration and management of relational and non-relational. <br />
            <strong>data structures and algorithms</strong> (sorting and binary searches), graphs, big O notation, analysis and cost improvement. <br />
            <strong>soft skills</strong>, Teamwork, Comunication, Ability to manage multiple responsibilities, Strong problem-solving skills.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
