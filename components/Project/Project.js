import styles from './Project.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Project = () => {
  return (
      <section className={styles.section_container}>
        <div className={styles.section_content}>
          <div className={styles.image_container}>
            <Image
              priority
              src="/images/projects/country-finder.png"
              className={styles.project_image}
              width={600}
              height={600}
              alt={'html'}
            />
          </div>
          <div className={styles.flex_description}>
            <div className={styles.flex_description_text}>
              <h2 className={styles.project_title}>Country Finder App</h2>
              <h3 className={styles.project_stack}>React | Chakra UI</h3>
              <p className={styles.project_description}>
                Web app where you can find any country and get information varies as population, local time, spoken languages... and weather information,
                I used React and Chakra UI to build de UI/UX, and Country API, weatherstack API to get the data
              </p>
            </div>
            <div className={styles.flex_buttons}>
              <Link href="https://countryfinderk.netlify.app">
                <a className={styles.project_button} target="_blank" rel="noopener noreferrer">
                  <span className={styles.button_text}>live demo</span>
                </a>
              </Link>
              <Link href="https://github.com/SGarcia96/country-finder">
                <a className={styles.project_button} target="_blank" rel="noopener noreferrer">
                  <span className={styles.button_text}>see code</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Project
