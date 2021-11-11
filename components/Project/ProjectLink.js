import styles from './Project.module.css'
import Link from 'next/link'

const ProjectLink = ({ href, name }) => {
  return (
    <Link href={href}>
      <a className={styles.project_button} target="_blank" rel="noopener noreferrer">
        <span className={styles.button_text}>{name}</span>
      </a>
    </Link>
  )
}

export default ProjectLink
