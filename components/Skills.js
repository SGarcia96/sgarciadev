import styles from "./Skills.module.css"
import Image from "next/image"

const Skills = () => {
  return (
    <section className={styles.skills_container}>
      <div className={styles.skills_content}>
        <h3 className={styles.skills_title}>Skills</h3>
        <ul className={styles.skills_list}>
          <li className={styles.skills_item}>
            <Image
              priority
              src="/images/html.svg"
              className={styles.skills_image}
              height={84}
              width={84}
              alt={"html"}
            />
            <span className={styles.skills_name}>HTML</span>
          </li>
          <li className={styles.skills_item}>
            <Image
              priority
              src="/images/css.svg"
              className={styles.skills_image}
              height={84}
              width={84}
              alt={"css"}
            />
            <span className={styles.skills_name}>CSS</span>
          </li>
          <li className={styles.skills_item}>
            <Image
              priority
              src="/images/javascript.svg"
              className={styles.skills_image}
              height={84}
              width={84}
              alt={"javascript"}
            />
            <span className={styles.skills_name}>JavaScript</span>
          </li>
          <li className={styles.skills_item}>
            <Image
              priority
              src="/images/typescript.svg"
              className={styles.skills_image}
              height={84}
              width={84}
              alt={"typescript"}
            />
            <span className={styles.skills_name}>TypeScript</span>
          </li>
          <li className={styles.skills_item}>
            <Image
              priority
              src="/images/react.svg"
              className={styles.skills_image}
              height={84}
              width={84}
              alt={"react"}
            />
            <span className={styles.skills_name}>React</span>
          </li>
          <li className={styles.skills_item}>
            <Image
              priority
              src="/images/nodejs.svg"
              className={styles.skills_image}
              height={84}
              width={84}
              alt={"nodejs"}
            />
            <span className={styles.skills_name}>NodeJs</span>
          </li>
          <li className={styles.skills_item}>
            <Image
              priority
              src="/images/express.svg"
              className={styles.skills_image}
              height={84}
              width={84}
              alt={"express"}
            />
            <span className={styles.skills_name}>Express</span>
          </li>
          <li className={styles.skills_item}>
            <Image
              priority
              src="/images/mongodb.svg"
              className={styles.skills_image}
              height={84}
              width={84}
              alt={"mongodb"}
            />
            <span className={styles.skills_name}>MongoDB</span>
          </li>
          <li className={styles.skills_item}>
            <Image
              priority
              src="/images/mysql.svg"
              className={styles.skills_image}
              height={84}
              width={84}
              alt={"mysql"}
            />
            <span className={styles.skills_name}>MySql</span>
          </li>
          <li className={styles.skills_item}>
            <Image
              priority
              src="/images/java.svg"
              className={styles.skills_image}
              height={84}
              width={84}
              alt={"java"}
            />
            <span className={styles.skills_name}>Java</span>
          </li>
          <li className={styles.skills_item}>
            <Image
              priority
              src="/images/spring.svg"
              className={styles.skills_image}
              height={84}
              width={84}
              alt={"spring"}
            />
            <span className={styles.skills_name}>Spring</span>
          </li>
          <li className={styles.skills_item}>
            <Image
              priority
              src="/images/cshard.svg"
              className={styles.skills_image}
              height={84}
              width={84}
              alt={"c shard"}
            />
            <span className={styles.skills_name}>C#</span>
          </li>
          <li className={styles.skills_item}>
            <Image
              priority
              src="/images/solidity.svg"
              className={styles.skills_image}
              height={84}
              width={84}
              alt={"solidity"}
            />
            <span className={styles.skills_name}>Solidity</span>
          </li>
          <li className={styles.skills_item}>
            <Image
              priority
              src="/images/docker.svg"
              className={styles.skills_image}
              height={84}
              width={84}
              alt={"docker"}
            />
            <span className={styles.skills_name}>Docker</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
