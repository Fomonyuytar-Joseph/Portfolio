import React from 'react'
import styles from "../styles/SkillsCard.module.css"

interface SkillsCardProps{
    tech:string
}

const SkillsCard = ({tech}:SkillsCardProps) => {
  return (
    <div className={styles.card}>
      {tech}
    </div>
  );
}

export default SkillsCard