import React from "react";

import styles from "../../styles/layout/Skills.module.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { BsGit} from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { FaCss3Alt, FaReact, FaSass, FaFigma } from "react-icons/fa";
import { BiLogoJavascript, BiLogoBootstrap, BiLogoTypescript, BiLogoNodejs} from "react-icons/bi";
import { SiStyledcomponents, SiNextdotjs, SiTailwindcss, SiRedux, SiStrapi, SiStorybook, SiExpress} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
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
          <h3>TypeSript</h3>
          <BiLogoTypescript className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>React.js</h3>
          <FaReact className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>Next.js</h3>
          <SiNextdotjs className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>CSS-in-JS</h3>
          <SiStyledcomponents className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>Figma</h3>
          <FaFigma className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>Git</h3>
          <BsGit className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>Tailwind</h3>
          <SiTailwindcss className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>SASS</h3>
          <FaSass className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>Redux</h3>
          <SiRedux className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>Strapi</h3>
          <SiStrapi className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>Storybook</h3>
          <SiStorybook className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>Node.js</h3>
          <BiLogoNodejs className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>Express.js</h3>
          <SiExpress className={styles.icon} />
        </div>
        <div className={styles.box}>
          <h3>Mysql</h3>
          <GrMysql className={styles.icon} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
