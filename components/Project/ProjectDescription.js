import styles from './Project.module.css'
import ProjectLink from './ProjectLink'

const ProjectDescription = ({ title, stack, description }) => {
  return (
    <div className={styles.flex_description}>
      <div className={styles.flex_description_text}>
        <h2 className={styles.project_title}>{title}</h2>
        <h3 className={styles.project_stack}>{stack}</h3>
        <p className={styles.project_description}>{description}</p>
      </div>
      <div className={styles.flex_buttons}>
        <ProjectLink
          href="https://countryfinderk.netlify.app"
          name="live demo"
        />
        <ProjectLink
          href="https://github.com/SGarcia96/country-finder"
          name="see code"
        />
      </div>
    </div>
  )
}

export default ProjectDescription
