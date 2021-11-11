import styles from './Skills.module.css'
import SkillItem from './SkillItem'
import html from '../../public/images/tecnologies/html.svg'
import css from '../../public/images/tecnologies/css.svg'
import js from '../../public/images/tecnologies/javascript.svg'
import ts from '../../public/images/tecnologies/typescript.svg'
import react from '../../public/images/tecnologies/react.svg'
import next from '../../public/images/tecnologies/nextjs.svg'
import node from '../../public/images/tecnologies/nodejs.svg'
import express from '../../public/images/tecnologies/express.svg'
import mongo from '../../public/images/tecnologies/mongodb.svg'
import mysql from '../../public/images/tecnologies/mysql.svg'
import java from '../../public/images/tecnologies/java.svg'
import spring from '../../public/images/tecnologies/spring.svg'
import python from '../../public/images/tecnologies/python.svg'
import cshard from '../../public/images/tecnologies/cshard.svg'
import solidity from '../../public/images/tecnologies/solidity.svg'
import docker from '../../public/images/tecnologies/docker.svg'

const Skills = () => {
  return (
    <section className={styles.skills_container}>
      <div className={styles.skills_content}>
        <h3 className={styles.skills_title}>Skills</h3>
        <ul className={styles.skills_list}>
          <SkillItem
            src={html}
            h="84"
            w="84"
            alt="html icon"
            name="html"
          />
          <SkillItem
            src={css}
            h="84"
            w="84"
            alt="css icon"
            name="css"
          />
          <SkillItem
            src={js}
            h="84"
            w="84"
            alt="javascript icon"
            name="javascript"
          />
          <SkillItem
            src={ts}
            h="84"
            w="84"
            alt="typescript icon"
            name="typescript"
          />
          <SkillItem
            src={react}
            h="84"
            w="84"
            alt="react icon"
            name="react"
          />
          <SkillItem
            src={next}
            h="84"
            w="84"
            alt="nextjs icon"
            name="nextjs"
          />
          <SkillItem
            src={node}
            h="84"
            w="84"
            alt="nodejs icon"
            name="nodejs"
          />
          <SkillItem
            src={express}
            h="84"
            w="84"
            alt="express icon"
            name="express"
          />
          <SkillItem
            src={mongo}
            h="84"
            w="84"
            alt="mongodb icon"
            name="mongodb"
          />
          <SkillItem
            src={mysql}
            h="84"
            w="84"
            alt="mysql icon"
            name="mysql"
          />
          <SkillItem
            src={java}
            h="84"
            w="84"
            alt="java icon"
            name="java"
          />
          <SkillItem
            src={spring}
            h="84"
            w="84"
            alt="spring icon"
            name="spring"
          />
          <SkillItem
            src={python}
            h="84"
            w="84"
            alt="python icon"
            name="python"
          />
          <SkillItem
            src={cshard}
            h="84"
            w="84"
            alt="cshard icon"
            name="cshard"
          />
          <SkillItem
            src={solidity}
            h="84"
            w="84"
            alt="solidity icon"
            name="solidity"
          />
          <SkillItem
            src={docker}
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
