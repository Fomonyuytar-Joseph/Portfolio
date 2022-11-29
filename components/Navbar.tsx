import React from 'react'
import styles from "../styles/Navbar.module.css"
import { useRouter } from "next/router";
import Link from "next/link";


const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <header className={styles.grid}>
      <h1>FJ</h1>

      <nav>
        <Link
          href="/"
          className={currentRoute === "/" ? styles.active : styles.nonActive}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={
            currentRoute === "/about" ? styles.active : styles.nonActive
          }
        >
          About
        </Link>
        <Link
          href="/experience"
          className={
            currentRoute === "/experience" ? styles.active : styles.nonActive
          }
        >
          Experience
        </Link>
        <Link
          href="/projects"
          className={
            currentRoute === "/projects" ? styles.active : styles.nonActive
          }
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={
            currentRoute === "/contact" ? styles.active : styles.nonActive
          }
        >
          Contact
        </Link>
        <button className={styles.grid__button}>Resume</button>
      </nav>
    </header>
  );
}

export default Navbar