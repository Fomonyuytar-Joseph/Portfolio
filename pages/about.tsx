import React from "react";
import Button from "../components/Button";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__know}>
        <div className={styles.container__get}>
          <h1>Get to Know Me</h1>
        </div>
        <div className={styles.container__detail}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            voluptate magni eligendi quia blanditiis aliquid animi illum
            voluptas veniam debitis. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Alias, omnis! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Unde quam esse pariatur tempora. Id,
            voluptatem?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem aperiam ullam impedit voluptate placeat vel ipsam nam
            nostrum voluptatibus laudantium?
          </p>
        </div>

        <div className={styles.button}>
          <Button text={"Contact Me"} />
        </div>
      </div>
      <div className={styles.container__know}>
        <div className={styles.container__skill}>
          <h2>Skills</h2>
        </div>

        <div className={styles}>
          <div>
            <h3 className={styles.heading}>Web</h3>
          </div>

          <div>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
          </div>
        </div>
        <div>
          <div>
            <h3 className={styles.heading}>Mobile</h3>
          </div>

          <div>
            <p>text</p>
          </div>
        </div>
        <div>
          <div>
            <h3 className={styles.heading}>Technologies</h3>
          </div>

          <div>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
