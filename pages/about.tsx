import React from "react";
import Button from "../components/Button";
import styles from "../styles/About.module.css";
import SkillsCard from "../components/SkillsCard";
import { webData, techData } from "../data/socialIcons";

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
      <div className={styles.container__know} style={{ paddingLeft: "60px" }}>
        <div className={styles.container__skill}>
          <h2>Skills</h2>
        </div>

        <div className={styles.myWebSkills}>
          <div>
            <h3 className={styles.heading} >Web</h3>
          </div>

          <div className={styles.makeFlex}>
            {webData.map((data: string, name) => {
              return <SkillsCard tech={data} />;
            })}
          </div>
        </div>
        <div className={styles.myMobileSkills}>
          <div>
            <h3 className={styles.Mobileheading}>Mobile</h3>
          </div>

          <div>
            <SkillsCard tech={"React Native"} />
          </div>
        </div>
        <div className={styles.myTechnologies}>
          <div>
            <h3 className={styles.techeading}>Technologies</h3>
          </div>

          <div className={styles.makeFlex}>
           {
            techData.map((data)=>{
                return <SkillsCard tech={data} />;
            })
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
