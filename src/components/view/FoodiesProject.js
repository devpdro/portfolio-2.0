import React, { useState } from "react";
import Modal from "react-modal";
import styles from "../../presentation/styles/view-more.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { projectsData } from "../../main/data/data";

Modal.setAppElement("#root");

function FoodiesProject() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "auto";
  };


  const project = projectsData.find((project) => project.title === "Foodies");

  return (
    <div>
      <input type="submit" value="Ver mais" onClick={openModal}></input>
      <Modal
        className={styles.modal_container}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className={styles.modal_content}>
          <div className={styles.box_container}>
            <img
              className={styles.img}
              src={project.imgSrc}
              alt={`Imagem do Projeto ${project.title}`}
            />
            <div className={styles.text_box}>
              <h1>
                <span>{project.title}</span>
              </h1>
              <p>{project.description}</p>
              <div>
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <input className={styles.btn} type="submit" value="Acessar projeto" />
                </a>
                <a href={project.repositoryLink} target="_blank" rel="noreferrer">
                  <input className={styles.btn} type="submit" value="Acessar repositório" />
                </a>
              </div>
            </div>
          </div>
          <AiOutlineCloseCircle className={styles.close} onClick={closeModal} />
        </div>
      </Modal>
    </div>
  );
}

export default FoodiesProject;
