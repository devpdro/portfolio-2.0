import React from "react";
import { Link } from "react-router-dom";

import styles from "../../presentation/styles/view-more.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { projectsData } from "../../main/data/data";

function TravelBeyond() {
  const travelBeyondProject = projectsData.find(
    (project) => project.title === "TravelBeyond"
  );
  
  if (!travelBeyondProject) {
    return <div>Projeto "TravelBeyond" não encontrado.</div>;
  }

  return (
    <main>
      <div>
        <img
          className={styles.imgCover}
          src={travelBeyondProject.imgSrc}
          alt={`Imagem do Projeto ${travelBeyondProject.title}`}
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
              href={travelBeyondProject.projectLink}
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
              href={travelBeyondProject.repositoryLink}
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
        <div key={travelBeyondProject.title} className={styles.project}>
          <div className={styles.text_box}>
            <p>{travelBeyondProject.description}</p>
          </div>
        </div>
        <h1 className={styles.title_video}>
          <span>Víd</span>eo
        </h1>
        <div className={styles.container_video}>
          <div>
            <iframe
              className={styles.box_video}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/T9qLoDryFeM?rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "3px solid #8b30f4" }}
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TravelBeyond;
