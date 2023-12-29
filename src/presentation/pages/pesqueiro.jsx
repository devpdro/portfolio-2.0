import React from "react";
import { Link } from "react-router-dom";

import styles from "../../presentation/styles/view-more.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { projectsData } from "../../main/data/data";

function Pesqueiro() {
  const PesqueiroProject = projectsData.find(
    (project) => project.title === "Pesqueiro"
  );

  if (!PesqueiroProject) {
    return <div>Projeto "Bookworm" não encontrado.</div>;
  }

  return (
    <main>
      <div>
        <img
          className={styles.imgCover}
          src={PesqueiroProject.imgSrc}
          alt={`Imagem do Projeto ${PesqueiroProject.title}`}
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
              href={PesqueiroProject.projectLink}
              target="_blank"
              rel="noreferrer"
            >
              <input
                className={styles.btn}
                type="submit"
                value="Acessar projeto"
              />
            </a>
          </div>
        </div>
        <h1 className={styles.title}>
          <span>Descriç</span>ão
        </h1>
        <div key={PesqueiroProject.title} className={styles.project}>
          <div className={styles.text_box}>
            <p>{PesqueiroProject.description}</p>
            {PesqueiroProject.features ? (
              <div className={styles.features}></div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Pesqueiro;
