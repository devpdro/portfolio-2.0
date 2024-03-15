import { AiFillHtml5, FaCss3Alt, BiLogoBootstrap, BiLogoJavascript, BiLogoTypescript, FaReact, SiStyledcomponents, GrMysql, FaFigma, BsGit, SiTailwindcss, FaSass, SiRedux } from 'react-icons/all';

import styles from '../../presentation/components/layout/skills.module.scss'; 
 
export const skillsData = [
    { name: "HTML5", icon: <AiFillHtml5 className={styles.icon} /> },
    { name: "CSS3", icon: <FaCss3Alt className={styles.icon} /> },
    { name: "BootStrap", icon: <BiLogoBootstrap className={styles.icon} /> },
    { name: "JavaScript", icon: <BiLogoJavascript className={styles.icon} /> },
    { name: "TypeSript", icon: <BiLogoTypescript className={styles.icon} /> },
    { name: "React.js", icon: <FaReact className={styles.icon} /> },
    { name: "CSS-in-JS", icon: <SiStyledcomponents className={styles.icon} /> },
    { name: "MySQL", icon: <GrMysql className={styles.icon} /> },
    { name: "Figma", icon: <FaFigma className={styles.icon} /> },
    { name: "Git", icon: <BsGit className={styles.icon} /> },
    { name: "Tailwind", icon: <SiTailwindcss className={styles.icon} /> },
    { name: "SASS", icon: <FaSass className={styles.icon} /> },
    { name: "Redux", icon: <SiRedux className={styles.icon} /> }
  ];