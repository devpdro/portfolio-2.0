import React, { useState } from "react";
import Modal from "react-modal";

import styles from "../../styles/view-more.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Foodies from "../../presentation/assets/foodies.png";

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
              src={Foodies}
              alt="Imagem do Projeto do Restaurante"
            />
            <div className={styles.text_box}>
              <h1>
                <span>Foodi</span>es
              </h1>
              <p>
                O projeto Foddies é uma representação visual de um restaurante,
                criado com o objetivo de explorar conceitos de design e
                experiência do usuário.
              </p>
              <p>
                Embora seja um projeto fictício, foi desenvolvido com paixão e
                atenção aos detalhes para transmitir uma atmosfera acolhedora e
                qualidade que você esperaria encontrar em um restaurante real.
              </p>
              <div>
                <a
                  href="https://projeto-food-two.vercel.app/"
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
                  href="https://github.com/devpdro/project-foodies"
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

export default FoodiesProject;
