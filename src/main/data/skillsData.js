import { ICON } from '../../presentation/assets/icons/icon';
import styles from '../../presentation/components/layout/skills.module.scss'; 
 
export const skillsData = [
    { name: "HTML5", icon: <ICON.AiFillHtml5 className={styles.icon} /> },
    { name: "CSS3", icon: <ICON.FaCss3Alt className={styles.icon} /> },
    { name: "BootStrap", icon: <ICON.BiLogoBootstrap className={styles.icon} /> },
    { name: "JavaScript", icon: <ICON.BiLogoJavascript className={styles.icon} /> },
    { name: "TypeSript", icon: <ICON.BiLogoTypescript className={styles.icon} /> },
    { name: "React.js", icon: <ICON.FaReact className={styles.icon} /> },
    { name: "CSS-in-JS", icon: <ICON.SiStyledcomponents className={styles.icon} /> },
    { name: "MySQL", icon: <ICON.GrMysql className={styles.icon} /> },
    { name: "Figma", icon: <ICON.FaFigma className={styles.icon} /> },
    { name: "Git", icon: <ICON.BsGit className={styles.icon} /> },
    { name: "Tailwind", icon: <ICON.SiTailwindcss className={styles.icon} /> },
    { name: "SASS", icon: <ICON.FaSass className={styles.icon} /> },
    { name: "Redux", icon: <ICON.SiRedux className={styles.icon} /> }
  ];