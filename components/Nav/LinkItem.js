import styles from './NavBar.module.css'
import Link from 'next/link'

const LinkItem = ({ href, name }) => {
  return (
    <li className={styles.navbar_list}>
      <Link href={href}>
        <a className={styles.navbar_item}>{name}</a>
      </Link>
    </li>
  )
}

export default LinkItem
