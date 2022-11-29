import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import MessageField from "../components/MessageField";
import styles from "../styles/Contact.module.css"

const Contact = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.MeContainer}>
        <h1 style={{margin:0,padding:0}}>Contact Me</h1>
        <p>
          Get in touch with me directly <span style={{ color: "#e1645b" ,fontWeight:"bold"}}>josephneymar33@gmail.com</span>
        </p>

        <p className={styles.reachOut}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          nesciunt magnam debitis? Voluptate, itaque id. Praesentium, molestiae
          soluta ratione illum eligendi nulla repellendus, earum veniam et
          dignissimos beatae exercitationem officiis?
        </p>
      </div>

      <div className={styles.inputContainer} >
        <InputField placeholderText="Name"/>
        <InputField placeholderText="Email"/>
        <MessageField/>
        <Button text="Contact Me"/>
      </div>
    </div>
  );
};

export default Contact;
