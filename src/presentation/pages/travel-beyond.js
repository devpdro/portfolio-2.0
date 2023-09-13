import React from "react";

import styles from "../../presentation/styles/view-more.module.scss";

import { projectsData } from "../../main/data/data";

function TravelBeyond() {
  const travelBeyondProject = projectsData.find((project) => project.title === "TravelBeyond");

  if (!travelBeyondProject) {
    return <div>Projeto "TravelBeyond" não encontrado.</div>;
  }

  return (
    <main>
      <div key={travelBeyondProject.title} className={styles.project}>
        <img
          className={styles.img}
          src={travelBeyondProject.imgSrc}
          alt={`Imagem do Projeto ${travelBeyondProject.title}`}
        />
        <div className={styles.text_box}>
          <h1>
            <span>{travelBeyondProject.title}</span>
          </h1>
          <p>{travelBeyondProject.description}</p>
          <div>
            <a href={travelBeyondProject.projectLink} target="_blank" rel="noreferrer">
              <input className={styles.btn} type="submit" value="Acessar projeto" />
            </a>
            <a href={travelBeyondProject.repositoryLink} target="_blank" rel="noreferrer">
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

export default TravelBeyond;
