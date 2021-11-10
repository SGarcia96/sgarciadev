import Link from "next/link"
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav className={styles.navbar_nav}>
      <li className={styles.navbar_list}>
        <Link href="/">
          <a className={styles.navbar_item}>Home</a>
        </Link>
      </li>
      <li className={styles.navbar_list}>
        <Link href="/projects">
          <a className={styles.navbar_item}>Projects</a>
        </Link>
      </li>
      <li className={styles.navbar_list}>
        <Link href="/blog">
          <a className={styles.navbar_item}>Blog</a>
        </Link>
      </li>
    </nav>
  )
}

export default NavBar
