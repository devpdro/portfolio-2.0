import React from "react";

import styles from "../../presentation/styles/view-more.module.scss";

import { projectsData } from "../../main/data/data";

function Finans() {
  const finansProject = projectsData.find((project) => project.title === "Finans");

  if (!finansProject) {
    return <div>Projeto "Finans" não encontrado.</div>;
  }

  return (
    <main>
      <div key={finansProject.title} className={styles.project}>
        <img
          className={styles.img}
          src={finansProject.imgSrc}
          alt={`Imagem do Projeto ${finansProject.title}`}
        />
        <div className={styles.text_box}>
          <h1>
            <span>{finansProject.title}</span>
          </h1>
          <p>{finansProject.description}</p>
          <div>
            <a href={finansProject.projectLink} target="_blank" rel="noreferrer">
              <input className={styles.btn} type="submit" value="Acessar projeto" />
            </a>
            <a href={finansProject.repositoryLink} target="_blank" rel="noreferrer">
              <input
                className={styles.btn}
                type="submit"
                value="Acessar repositório"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Finans;
