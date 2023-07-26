import React, { useState } from "react";
import Modal from "react-modal";

import styles from "../../styles/ViewMore.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Spotify from "../../assets/spotify.png";

Modal.setAppElement("#root");

function SpotifyProject() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "auto";
  };

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
              src={Spotify}
              alt="Imagem do projeto, clone do spotify"
            />
            <div className={styles.text_box}>
              <h1>
                <span> Spotify Clo</span>ne
              </h1>
              <p>
                O projeto foi desenvolvido há muito tempo, possui um layout
                estático e visualmente agradável. Com gráficos e cores
                harmoniosos, fiz esse projeto com a intenção de aprimorar minhas
                habilidades na tecnologia Bootstrap.
              </p>
              <div>
                <a
                  href="https://spiffy-daffodil-c94357.netlify.app/"
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
                  href="https://github.com/devpdro/project-spotify-clone"
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
          </div>
          <AiOutlineCloseCircle className={styles.close} onClick={closeModal} />
        </div>
      </Modal>
    </div>
  );
}

export default SpotifyProject;
