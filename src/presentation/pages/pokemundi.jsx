import React from "react";
import { Link } from "react-router-dom";

import styles from "../../presentation/styles/view-more.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { projectsData } from "../../main/data/data";

function Pokemundi() {
  const pokemundiProject = projectsData.find(
    (project) => project.title === "Pokemundi"
  );

  if (!pokemundiProject) {
    return <div>Projeto "Pokemundi" não encontrado.</div>;
  }

  return (
    <main>
      <div>
        <img
          className={styles.imgCover}
          src={pokemundiProject.imgSrc}
          alt={`Imagem do Projeto ${pokemundiProject.title}`}
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
              href={pokemundiProject.projectLink}
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
              href={pokemundiProject.repositoryLink}
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
        <div key={pokemundiProject.title} className={styles.project}>
          <div className={styles.text_box}>
            <p>{pokemundiProject.description}</p>
          </div>
        </div>
        <h1 className={styles.title_video}>
          <span>Víd</span>eo
        </h1>
        <div className={styles.container_video}>
          <div>
            <iframe
            className={styles.box_video}
            style={{ border: "3px solid #8b30f4" }}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/IPf267lll50?si=g0z4foSB255Gimh3"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Pokemundi;
