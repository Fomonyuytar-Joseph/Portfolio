import React from 'react'
import Navbar from './Navbar'
import styles from "../styles/Layout.module.css"
import { ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#e1645b",
    },
    secondary: {
      main: "#f4f4f4",
    },
  },
});


const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.container__children}>{children}</div>
      </div>
    </ThemeProvider>
  );
}

export default Layout