import React from "react";

import styles from "../../styles/layout/Projects.module.scss";

import { FaReact, FaSass } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

import Pokemundi from "../../assets/pokemundi.png";

function Projects() {
  return (
    <section className={styles.container}>
      <h1>Projetos</h1>
      <div className={styles.box_container_projects}>
        <div className={styles.box}>
          <img src={Pokemundi} alt="Viagem" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <FaReact className={styles.icon_react} />
              <FaSass className={styles.icon_sass} />
              <SiVercel className={styles.icon_vercel} />
            </div>

            <div className={styles.input_box}>
              <input type="submit" value="Ver mais" />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={Pokemundi} alt="Viagem" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <FaReact className={styles.icon_react} />
              <FaSass className={styles.icon_sass} />
              <SiVercel className={styles.icon_vercel} />
            </div>

            <div className={styles.input_box}>
              <input type="submit" value="Ver mais" />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={Pokemundi} alt="Viagem" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <FaReact className={styles.icon_react} />
              <FaSass className={styles.icon_sass} />
              <SiVercel className={styles.icon_vercel} />
            </div>

            <div className={styles.input_box}>
              <input type="submit" value="Ver mais" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
