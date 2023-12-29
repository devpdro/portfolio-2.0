import React from "react";
import { Link } from "react-router-dom";

import styles from "../../presentation/styles/view-more.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { projectsData } from "../../main/data/data";

function Bookworm() {
  const bookwormProject = projectsData.find(
    (project) => project.title === "Bookworm"
  );

  if (!bookwormProject) {
    return <div>Projeto "Bookworm" não encontrado.</div>;
  }

  return (
    <main>
      <div>
        <img
          className={styles.imgCover}
          src={bookwormProject.imgSrc}
          alt={`Imagem do Projeto ${bookwormProject.title}`}
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
              href={bookwormProject.projectLink}
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
              href={bookwormProject.repositoryLink}
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
        <div key={bookwormProject.title} className={styles.project}>
          <div className={styles.text_box}>
            <p>{bookwormProject.description}</p>
            {bookwormProject.features ? (
              <div className={styles.features}>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Bookworm;
