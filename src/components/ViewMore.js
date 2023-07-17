import React, { useState } from "react";
import Modal from "react-modal";

import styles from "../styles/ViewMore.module.scss";
import { AiOutlineClose } from "react-icons/ai";

import Travel from "../assets/travel.png";

Modal.setAppElement("#root");

function ViewMore() {
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
      <input type="submit" value="Ver mais" onClick={openModal} />
      <Modal
        className={styles.modal_container}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        {/* Conteúdo do alerta */}
        <div className={styles.modal_content}>
          <div className={styles.box_container}>
            <div className={styles.img_box}>
              <img src={Travel} alt="Imagem do projeto de viagens" />
              <input
                className={styles.btn}
                type="submit"
                value="Acessar projeto"
              />
              <input
                className={styles.btn}
                type="submit"
                value="Acessar projeto"
              />
            </div>
            <div className={styles.text_box}>
              <h1>Travel</h1>{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                dignissimos omnis veritatis ex sed, molestiae et eaque quidem
                obcaecati enim nemo, labore, incidunt praesentium fuga nesciunt?
                Sint quae illum molestias?
              </p>
            </div>
          </div>
          <AiOutlineClose className={styles.close} onClick={closeModal} />
        </div>
      </Modal>
    </div>
  );
}

export default ViewMore;
