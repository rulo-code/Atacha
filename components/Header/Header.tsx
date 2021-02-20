import Link from "next/link"
import Navbar from "../Navbar/Navbar"
import styles from "./Header.module.scss"
import React from "react"

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          {/* // mejorar seo */}
          <a className={styles.logo}>Atacha</a>
        </Link>
      </div>
      <input className={styles.search} type="text" placeholder="Buscar ..." />
      <Navbar />
    </div>
  )
}

export default Header
