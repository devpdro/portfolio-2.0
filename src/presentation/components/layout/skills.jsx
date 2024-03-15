import React from "react";

import { skillsData } from "../../../main/data/skillsData";

import styles from "./skills.module.scss";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1>Habilidades</h1>
      <div className={styles.box_skills}>
        {skillsData.map((skill, index) => (
          <div className={styles.box} key={index}>
            <h3>{skill.name}</h3>
            {skill.icon}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
