import React from 'react'
import Navbar from './Navbar'
import styles from "../styles/Layout.module.css"

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.container__children}>
        {children}
        </div>
    </div>
  );
}

export default Layout