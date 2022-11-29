import React from 'react'
import styles from "../styles/InputField.module.css"


interface InputFieldProps{
    placeholderText:string
}

const InputField = ({placeholderText}:InputFieldProps) => {
  return (
    <>
    <input type="text" placeholder={placeholderText} className={styles.InputContainer}/>
    
    </>
  )
}

export default InputField