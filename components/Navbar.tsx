import React from 'react'
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <header className={styles.grid}>
      <h1>FJ</h1>

      <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Experience</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
        <button className={styles.grid__button}>Resume</button>
      </nav>
    </header>
  );
}

export default Navbar