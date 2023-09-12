import React, { useState } from "react";
import Modal from "react-modal";

import styles from "../../styles/view-more.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Play from "../../presentation/assets/playtv.png";

Modal.setAppElement("#root");

function PlayTv() {
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
              src={Play}
              alt="Imagem do Projeto de Filmes"
            />
            <div className={styles.text_box}>
              <h1>
                <span>Play</span>TV
              </h1>
              <p>
                Este projeto oferece aos usuários a oportunidade de explorar
                diferentes plataformas como Prime Video, Netflix, HBO e outras,
                enquanto navegam em uma seleção diversificada de filmes e
                músicas.
              </p>
              <div>
                <a
                  href="https://play-tv-project.vercel.app/"
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
                  href="https://github.com/devpdro/play-tv-project"
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

export default PlayTv;
