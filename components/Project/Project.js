import styles from './Project.module.css'
import Image from 'next/image'

const Project = () => {
  return (
      <section className={styles.section_container}>
        <div className={styles.section_content}>
          <div className={styles.image_container}>
            <Image
              priority
              src="/images/profile.jpg"
              className={styles.project_image}
              width={565}
              height={520}
              alt={'html'}
            />
          </div>
          <div className={styles.flex_description}>
            <div className={styles.flex_description_text}>
              <h2 className={styles.project_title}>Country Finder</h2>
              <p className={styles.project_description}>dsadsdasdsadasdsadsaadsadsadsadsasadsadadadsadadadadadadadadadadadadadadad</p>
            </div>
            <div className={styles.flex_buttons}>
              <button className={styles.project_button}>
                <span className={styles.button_text}>live demo</span>
              </button>
              <button className={styles.project_button}>
                <span className={styles.button_text}>see code</span>
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Project
