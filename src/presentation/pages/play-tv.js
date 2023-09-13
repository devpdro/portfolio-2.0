import React from "react";

import styles from "../../presentation/styles/view-more.module.scss";

import { projectsData } from "../../main/data/data";

function PlayTV() {
  const playTVProject = projectsData.find((project) => project.title === "PlayTV");

  if (!playTVProject) {
    return <div>Projeto "PlayTV" não encontrado.</div>;
  }

  return (
    <main>
      <div key={playTVProject.title} className={styles.project}>
        <img
          className={styles.img}
          src={playTVProject.imgSrc}
          alt={`Imagem do Projeto ${playTVProject.title}`}
        />
        <div className={styles.text_box}>
          <h1>
            <span>{playTVProject.title}</span>
          </h1>
          <p>{playTVProject.description}</p>
          <div>
            <a href={playTVProject.projectLink} target="_blank" rel="noreferrer">
              <input className={styles.btn} type="submit" value="Acessar projeto" />
            </a>
            <a href={playTVProject.repositoryLink} target="_blank" rel="noreferrer">
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

export default PlayTV;
