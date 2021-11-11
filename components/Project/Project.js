import styles from './Project.module.css'
import ProjectImage from './ProjectImage'
import ProjectDescription from './ProjectDescription'
import countryPic from '../../public/images/projects/country-finder.png'

const Project = () => {
  return (
      <section className={styles.section_container}>
        <article className={styles.section_content}>
          <ProjectImage
            src={countryPic}
            alt="Country finder app example"
          />
          <ProjectDescription
            title="Country Finder App"
            stack="React | Chakra UI"
            description="Web app where you can find any country and get information varies as population, local time, spoken languages... and weather information,
              I used React and Chakra UI to build de UI/UX, and Country API, weatherstack API to get the data"
          />
        </article>
      </section>
  )
}

export default Project
