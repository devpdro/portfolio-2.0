import React from "react";
import { Link, useParams } from "react-router-dom";

import styles from "../../presentation/styles/view.more.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { pageProjects } from "../../main/data/pageProjectsData";
import Navbar from "../components/layout/navbar";

function ProjectPage() {
  const { id } = useParams();
  const project = pageProjects.find((project) => project.title === id);

  if (!project) {
    return (
      <div>
        <Navbar />
        <div style={{maxWidth: "1280px", margin: "0 auto"}}>
          <p className={styles.not_found}>Projeto "{id}" não encontrado.</p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div>
        <img
          className={styles.imgCover}
          src={project.imgSrc}
          alt={`Imagem do Projeto ${project.title}`}
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
            <a href={project.projectLink} target="_blank" rel="noreferrer">
              <input
                className={styles.btn}
                type="submit"
                value="Acessar projeto"
              />
            </a>
            {project.repositoryLink && (
              <a href={project.repositoryLink} target="_blank" rel="noreferrer">
                <input
                  className={styles.btn}
                  type="submit"
                  value="Acessar repositório"
                />
              </a>
            )}
          </div>
        </div>
        <h1 className={styles.title}>
          <span>Descrição</span>
        </h1>
        <div key={project.title} className={styles.project}>
          <div className={styles.text_box}>
            <p>{project.description}</p>
            {project.features && (
              <div className={styles.features}>
                <h2>Features:</h2>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
