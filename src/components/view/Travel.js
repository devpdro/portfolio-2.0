import React, { useState } from "react";
import Modal from "react-modal";

import styles from "../../styles/ViewMore.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

import TravelBeyond from "../../assets/travelBeyond.png";

Modal.setAppElement("#root");

function Travel() {
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
        {/* Conteúdo do alerta */}
        <div className={styles.modal_content}>
          <div className={styles.box_container}>
            <img
              className={styles.img}
              src={TravelBeyond}
              alt="Imagem do projeto de viagens"
            />
            <div className={styles.text_box}>
              <h1><span>TravelBeyo</span>nd</h1>{" "}
              <p>
                TravelBeyond é uma plataforma que lhe mostrará as maravilhas da
                África Ocidental, combinado com a poderosa tecnologia React e
                com a versatilidade do JSON simulando uma API.
              </p>
              <p>
                Através da simulação de uma API, cada imagem vai ser selecionada
                e exibida com detalhes, permitindo que você tenha uma visão
                autêntica de cada destino.
              </p>
              <p>
                Explore as fotografias deslumbrantes e deixe sua imaginação voar
                enquanto você se transporta para os lugares mais da África
                Ocidental.
              </p>
              <div>
                <input
                  className={styles.btn}
                  type="submit"
                  value="Acessar projeto"
                />
                <input
                  className={styles.btn}
                  type="submit"
                  value="Acessar repositório"
                />
              </div>
            </div>
          </div>
          <AiOutlineCloseCircle className={styles.close} onClick={closeModal} />
        </div>
      </Modal>
    </div>
  );
}

export default Travel;
