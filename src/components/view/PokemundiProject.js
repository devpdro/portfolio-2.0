import React, { useState } from "react";
import Modal from "react-modal";

import styles from "../../styles/ViewMore.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Pokemundi from "../../assets/pokemundi.png";

Modal.setAppElement("#root");

function PokemundiProject() {
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
              src={Pokemundi}
              alt="Imagem do Projeto de Pokemons"
            />
            <div className={styles.text_box}>
              <h1>
                <span>Pokemun</span>di
              </h1>
              <p>
                O projeto consiste em um aplicação interativa e responsiva
                desenvolvida com Next.js, uma estrutura de React para criação de
                páginas renderizadas no lado do servidor (SSR) e na
                pré-renderização.
              </p>
              <p>
                O objetivo é fornecer aos usuários informações detalhadas sobre
                diferentes espécies de Pokémon por meio da integração com uma
                API Pokémon.
              </p>
              <div>
                <a
                  href="https://pokemundi-project.vercel.app/"
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
                  href="https://github.com/devpdro/pokemundi-project"
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

export default PokemundiProject;
