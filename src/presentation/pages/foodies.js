import React from "react";

import styles from "../../presentation/styles/view-more.module.scss";

import { projectsData } from "../../main/data/data";

function Foodies() {
  const foodiesProject = projectsData.find((project) => project.title === "Foodies");

  if (!foodiesProject) {
    return <div>Projeto "Foodies" não encontrado.</div>;
  }

  return (
    <main>
      <div key={foodiesProject.title} className={styles.project}>
        <img
          className={styles.img}
          src={foodiesProject.imgSrc}
          alt={`Imagem do Projeto ${foodiesProject.title}`}
        />
        <div className={styles.text_box}>
          <h1>
            <span>{foodiesProject.title}</span>
          </h1>
          <p>{foodiesProject.description}</p>
          <div>
            <a href={foodiesProject.projectLink} target="_blank" rel="noreferrer">
              <input className={styles.btn} type="submit" value="Acessar projeto" />
            </a>
            <a href={foodiesProject.repositoryLink} target="_blank" rel="noreferrer">
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

export default Foodies;
