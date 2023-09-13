import React from "react";

import styles from "../../presentation/styles/view-more.module.scss";

import { projectsData } from "../../main/data/data";

function Bookworm() {
  const bookwormProject = projectsData.find((project) => project.title === "Baookworm");

  if (!bookwormProject) {
    return <div>Projeto "Bookworm" não encontrado.</div>;
  }

  return (
    <main>
      <div key={bookwormProject.title} className={styles.project}>
        <img
          className={styles.img}
          src={bookwormProject.imgSrc}
          alt={`Imagem do Projeto ${bookwormProject.title}`}
        />
        <div className={styles.text_box}>
          <h1>
            <span>{bookwormProject.title}</span>
          </h1>
          <p>{bookwormProject.description}</p>
          {bookwormProject.features ? (
            <div>
              <p>Algumas features que valem destacar:</p>
              <ul className={styles.list_text}>
                {bookwormProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <div>
            <a href={bookwormProject.projectLink} target="_blank" rel="noreferrer">
              <input className={styles.btn} type="submit" value="Acessar projeto" />
            </a>
            <a href={bookwormProject.repositoryLink} target="_blank" rel="noreferrer">
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

export default Bookworm;
