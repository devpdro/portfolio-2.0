import React from "react";

import styles from "../../presentation/styles/view-more.module.scss";

import { projectsData } from "../../main/data/data";

function Pokemundi() {
  const pokemundiProject = projectsData.find((project) => project.title === "Pokemundi");

  if (!pokemundiProject) {
    return <div>Projeto "Pokemundi" não encontrado.</div>;
  }

  return (
    <main>
      <div key={pokemundiProject.title} className={styles.project}>
        <img
          className={styles.img}
          src={pokemundiProject.imgSrc}
          alt={`Imagem do Projeto ${pokemundiProject.title}`}
        />
        <div className={styles.text_box}>
          <h1>
            <span>{pokemundiProject.title}</span>
          </h1>
          <p>{pokemundiProject.description}</p>
          <div>
            <a href={pokemundiProject.projectLink} target="_blank" rel="noreferrer">
              <input className={styles.btn} type="submit" value="Acessar projeto" />
            </a>
            <a href={pokemundiProject.repositoryLink} target="_blank" rel="noreferrer">
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

export default Pokemundi;
