import React from 'react'
import { FaSuitcase } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";
import styles from "../styles/Experience.module.css"
const Experience = () => {
  return (
    <div>
      <h1>Where I've Worked</h1>

      <div>
        <div className={styles.position}>
          <span>
            <FaSuitcase color="#e1645b" size={25} />
          </span>
          <h3 style={{ fontWeight: "bold" }}>Frontend Engineer(Intern)</h3>
          <h3 style={{ fontWeight: "bold", color: "#e1645b" }}>
            @ Digital Renter
          </h3>
        </div>

        <div>
          <div className={styles.postionDetails}>
            <span className={styles.postionIcon}>
              <GoTriangleRight color="#e1645b" size={20} />
            </span>
            <p className={styles.postionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
              dui facilisis, convallis ligula vel, ultrices risus. Aenean
              blandit sed metus sit a
            </p>
            <span className={styles.postionIcon}>
              <GoTriangleRight color="#e1645b" size={20} />
            </span>
            <p className={styles.postionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
              dui facilisis, convallis ligula vel, ultrices risus. Aenean
              blandit sed metus sit a
            </p>
            <span className={styles.postionIcon}>
              <GoTriangleRight color="#e1645b" size={20} />
            </span>
            <p className={styles.postionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
              dui facilisis, convallis ligula vel, ultrices risus. Aenean
              blandit sed metus sit a
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Experience