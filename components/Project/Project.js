import styles from "./Project.module.css"
import Image from "next/image"

const Project = () => {
    return (
      <section className={styles.flex_section}>
        <div className={styles.image_container}>
          <Image
            priority
            src="/images/profile.jpg"
            className={styles.project_image}
            width={565}
            height={420}
            alt={"html"}
          />
        <div className={styles.overlay}>
          React | Chakra UI
        </div>
        </div>
        <div className={styles.flex_description}>
          <div className={styles.flex_description_text}>
            <h2 className={styles.project_title}>First Project</h2>
            <p className={styles.project_description}>dsadsdasdsadasdsadsaadsadsadsadsasadsadadadsadadadadadadadadadadadadadadad</p>
          </div>
          <div className={styles.flex_buttons}>
            <button className={styles.project_button}>
              <span className={styles.button_text}>view demo</span>
            </button>
            <button className={styles.project_button}>
              <span className={styles.button_text}>see code</span>
            </button>
          </div>
        </div>
      </section>
    )
}

export default Project