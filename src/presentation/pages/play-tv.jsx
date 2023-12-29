import React from "react";
import { Link } from "react-router-dom";

import styles from "../../presentation/styles/view-more.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { projectsData } from "../../main/data/data";

function PlayTv() {
  const playTvProject = projectsData.find(
    (project) => project.title === "PlayTV"
  );

  if (!playTvProject) {
    return <div>Projeto "PlayTV" não encontrado.</div>;
  }

  return (
    <main>
      <div>
        <img
          className={styles.imgCover}
          src={playTvProject.imgSrc}
          alt={`Imagem do Projeto ${playTvProject.title}`}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.icon}>
            <Link to="/">
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <div className={styles.links}>
            <a
              href={playTvProject.projectLink}
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
              href={playTvProject.repositoryLink}
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
        <h1 className={styles.title}>
          <span>Descriç</span>ão
        </h1>
        <div key={playTvProject.title} className={styles.project}>
          <div className={styles.text_box}>
            <p>{playTvProject.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PlayTv;
