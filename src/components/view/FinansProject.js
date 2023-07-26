import React, { useState } from "react";
import Modal from "react-modal";

import styles from "../../styles/ViewMore.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Finans from "../../assets/finans.png";

Modal.setAppElement("#root");

function FinansProject() {
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
              src={Finans}
              alt="Imagem do Projeto de Finanças Pessoais"
            />
            <div className={styles.text_box}>
              <h1>
                <span>Fina</span>ns
              </h1>
              <p>
                O projeto Finans foi desenvolvido há muito tempo, tem um layout
                estático e visualmente agradável. Com grafismos e cores
                harmoniosos, criei este projeto com o intuito de aprimorar
                minhas habilidades na tecnologia Bootstrap.
              </p>
              <div>
                <a
                  href="https://marvelous-monstera-96229f.netlify.app/"
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
                  href="https://github.com/devpdro/project-finans"
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

export default FinansProject;
