import styles from './NavBar.module.css'
import LinkItem from './LinkItem'

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul className={styles.navbar_ul}>
          <LinkItem
            href="/"
            name="Home"
          />
          <LinkItem
            href="/projects"
            name="Projects"
          />
          <LinkItem
            href="/blog"
            name="Blog"
          />
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
