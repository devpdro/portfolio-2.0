import React from "react";

import styles from "../../presentation/styles/view-more.module.scss";

import { projectsData } from "../../main/data/data";

import { Link } from "react-router-dom";

function Bookworm() {
  return (
    <div>
        <Link to="/bookworm">
     <input type="submit" value="Ver mais"></input>
     </Link>
      {projectsData.map((project) => (
        <div key={project.id} className={styles.project}>
          <img
            className={styles.img}
            src={project.imgSrc}
            alt={`Imagem do Projeto ${project.title}`}
          />
          <div className={styles.text_box}>
            <h1>
              <span>{project.title}</span>
            </h1>
            <p>{project.description}</p>
            <p>Algumas features que valem destacar:</p>
            <ul className={styles.list_text}>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noreferrer"
              >
                <input
                  className={styles.btn}
                  type="submit"
                  value="Acessar projeto"
                />
              </a>
              <a
                href={project.repositoryLink}
                target="_blank"
                rel="noreferrer"
              >
                <input
                  className={styles.btn}
                  type="submit"
                  value="Acessar repositório"
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bookworm;
