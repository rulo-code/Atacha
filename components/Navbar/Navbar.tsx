import Link from "next/link"
import React from "react"
import styles from "./Navbar.module.scss"

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/inventario">
        <a className={styles.navbarItem}>
          <p>Inventario</p>
        </a>
      </Link>
      <Link href="/mercadillo">
        <a className={styles.navbarItem}>
          <p>Inventario</p>
        </a>
      </Link>
      <Link href="/deseos">
        <a className={styles.navbarItem}>
          <p>Deseos</p>
        </a>
      </Link>
    </div>
  )
}

export default Navbar
