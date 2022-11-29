import React from 'react'
import styles from "../styles/MessageField.module.css"

const MessageField = () => {
  return (
    <>
      <textarea placeholder="Message" className={styles.messageInput}></textarea>
    </>
  );
}

export default MessageField