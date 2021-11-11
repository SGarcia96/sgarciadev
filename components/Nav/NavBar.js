import styles from './NavBar.module.css'
import LinkItem from './LinkItem'

const NavBar = () => {
  return (
    <header>
      <nav className={styles.navbar_nav}>
        <LinkItem
          href="/"
          name="Home"
        />
        <LinkItem
          href="/projects"
          name="Projects"
        />
        <LinkItem
          href="/blogs"
          name="Blog"
        />
      </nav>
    </header>
  )
}

export default NavBar
