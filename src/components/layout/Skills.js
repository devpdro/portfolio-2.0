import React from "react";

import styles from "../../styles/layout/Skills.module.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaSass, FaFigma } from "react-icons/fa";
import { BiLogoJavascript, BiLogoBootstrap } from "react-icons/bi";
import { SiStyledcomponents, SiNextdotjs, SiTailwindcss } from "react-icons/si";

function Skills() {
  return (
    <section className={styles.container}>
      <h1>Habilidades</h1>
      <div className={styles.box_skills}>
        <div className={styles.box}>
          <h3>HTML5</h3>
          <AiFillHtml5 className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>CSS3</h3>
          <FaCss3Alt className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>BootStrap</h3>
          <BiLogoBootstrap className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>JavaScript</h3>
          <BiLogoJavascript className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>React.js</h3>
          <FaReact className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>SASS</h3>
          <FaSass className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>Figma</h3>
          <FaFigma className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>CSS-in-JS</h3>
          <SiStyledcomponents className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>Next.js</h3>
          <SiNextdotjs className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>Tailwind</h3>
          <SiTailwindcss className={styles.icon} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
