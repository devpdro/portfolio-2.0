import React from "react";
import { Link } from "react-router-dom";

import styles from "../../presentation/styles/view-more.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { projectsData } from "../../main/data/data";

function AutoLuxury() {
  const autoLuxuryProject = projectsData.find(
    (project) => project.title === "Auto Luxury"
  );

  if (!autoLuxuryProject) {
    return <div>Projeto "Auto Luxury" não encontrado.</div>;
  }

  return (
    <main>
      <div>
        <img
          className={styles.imgCover}
          src={autoLuxuryProject.imgSrc}
          alt={`Imagem do Projeto ${autoLuxuryProject.title}`}
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
              href={autoLuxuryProject.projectLink}
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
              href={autoLuxuryProject.repositoryLink}
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
        <div key={autoLuxuryProject.title} className={styles.project}>
          <div className={styles.text_box}>
            <p>{autoLuxuryProject.description}</p>
            {autoLuxuryProject.features ? (
              <div className={styles.features}>
                <p>
                  Algumas <span>features</span> que valem destacar:
                </p>
                <ul className={styles.list_text}>
                  {autoLuxuryProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        <h1 className={styles.title_video}>
          <span>Víd</span>eo
        </h1>
        <div className={styles.container_video}>
          <div>
          <iframe className={styles.box_video} style={{ border: "3px solid #8b30f4" }} width="560" height="315" src="https://www.youtube.com/embed/i8l3TkP99ds?si=K66XIuIekj5eYV_6?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AutoLuxury;