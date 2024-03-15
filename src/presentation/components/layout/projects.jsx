import React from "react";
import { Link } from "react-router-dom";

import { projects, highlights } from "../../../main/data/projectsData";

import styles from "./projects.module.scss";

function Projects() {
  // eslint-disable-next-line
  const allProjects = [...highlights, ...projects];

  return (
    <section id="projects" className={styles.container}>
      <h1>Projetos</h1>
      <h2 className={styles.title}>
        <span>Destaqu</span>es
      </h2>
      <div className={styles.box_container_projects}>
        {projects.map((project, index) => (
          <div className={styles.box} key={index}>
            <img
              className={styles.img}
              src={project.image}
              alt={`Imagem do Projeto ${project.name}`}
            />
            <div className={styles.icons_box_container}>
              <div className={styles.box_icons}>
                {project.icons.map((icon, i) => (
                  <span key={i} className={styles.icon}>
                    {icon}
                  </span>
                ))}
              </div>
              <div className={styles.input_box}>
                <Link to={project.link}>
                  <input
                    type="submit"
                    value="Ver mais"
                    className={styles.input_box}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className={styles.title}>
        <span>Todos os Projet</span>os
      </h2>
      <div className={styles.box_container_projects}>
        {highlights.map((project, index) => (
          <div className={styles.box} key={index}>
            <img
              className={styles.img}
              src={project.image}
              alt={`Imagem do Projeto ${project.name}`}
            />
            <div className={styles.icons_box_container}>
              <div className={styles.box_icons}>
                {project.icons.map((icon, i) => (
                  <span key={i} className={styles.icon}>
                    {icon}
                  </span>
                ))}
              </div>
              <div className={styles.input_box}>
                <Link to={project.link}>
                  <input
                    type="submit"
                    value="Ver mais"
                    className={styles.input_box}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
