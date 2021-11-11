import styles from './Skills.module.css'
import SkillItem from './SkillItem'

const Skills = () => {
  return (
    <section className={styles.skills_container}>
      <div className={styles.skills_content}>
        <h3 className={styles.skills_title}>Skills</h3>
        <ul className={styles.skills_list}>
          <SkillItem
            src="/images/tecnologies/html.svg"
            h="84"
            w="84"
            alt="html icon"
            name="html"
          />
          <SkillItem
            src="/images/tecnologies/css.svg"
            h="84"
            w="84"
            alt="css icon"
            name="css"
          />
          <SkillItem
            src="/images/tecnologies/javascript.svg"
            h="84"
            w="84"
            alt="javascript icon"
            name="javascript"
          />
          <SkillItem
            src="/images/tecnologies/typescript.svg"
            h="84"
            w="84"
            alt="typescript icon"
            name="typescript"
          />
          <SkillItem
            src="/images/tecnologies/react.svg"
            h="84"
            w="84"
            alt="react icon"
            name="react"
          />
          <SkillItem
            src="/images/tecnologies/nextjs.svg"
            h="84"
            w="84"
            alt="nextjs icon"
            name="nextjs"
          />
          <SkillItem
            src="/images/tecnologies/nodejs.svg"
            h="84"
            w="84"
            alt="nodejs icon"
            name="nodejs"
          />
          <SkillItem
            src="/images/tecnologies/express.svg"
            h="84"
            w="84"
            alt="express icon"
            name="express"
          />
          <SkillItem
            src="/images/tecnologies/mongodb.svg"
            h="84"
            w="84"
            alt="mongodb icon"
            name="mongodb"
          />
          <SkillItem
            src="/images/tecnologies/mysql.svg"
            h="84"
            w="84"
            alt="mysql icon"
            name="mysql"
          />
          <SkillItem
            src="/images/tecnologies/java.svg"
            h="84"
            w="84"
            alt="java icon"
            name="java"
          />
          <SkillItem
            src="/images/tecnologies/spring.svg"
            h="84"
            w="84"
            alt="spring icon"
            name="spring"
          />
          <SkillItem
            src="/images/tecnologies/python.svg"
            h="84"
            w="84"
            alt="python icon"
            name="python"
          />
          <SkillItem
            src="/images/tecnologies/cshard.svg"
            h="84"
            w="84"
            alt="cshard icon"
            name="cshard"
          />
          <SkillItem
            src="/images/tecnologies/solidity.svg"
            h="84"
            w="84"
            alt="solidity icon"
            name="solidity"
          />
          <SkillItem
            src="/images/tecnologies/docker.svg"
            h="84"
            w="84"
            alt="docker icon"
            name="docker"
          />
        </ul>
      </div>
    </section>
  )
}

export default Skills
