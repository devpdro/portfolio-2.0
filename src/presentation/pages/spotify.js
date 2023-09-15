import React from "react";

import styles from "../../presentation/styles/view-more.module.scss";

import { projectsData } from "../../main/data/data";

function SpotifyClone() {
  const spotifyCloneProject = projectsData.find((project) => project.title === "Spotify Clone");

  if (!spotifyCloneProject) {
    return <div>Projeto "Spotify Clone" não encontrado.</div>;
  }

  return (
    <main>
      <div key={spotifyCloneProject.title} className={styles.project}>
        <img
          className={styles.img}
          src={spotifyCloneProject.imgSrc}
          alt={`Imagem do Projeto ${spotifyCloneProject.title}`}
        />
        <div className={styles.text_box}a>
          <h1>
            <span>{spotifyCloneProject.title}</span>
          </h1>
          <p>{spotifyCloneProject.description}</p>
          <div>
            <a href={spotifyCloneProject.projectLink} target="_blank" rel="noreferrer">
              <input className={styles.btn} type="submit" value="Acessar projeto" />
            </a>
            <a href={spotifyCloneProject.repositoryLink} target="_blank" rel="noreferrer">
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

export default SpotifyClone;
