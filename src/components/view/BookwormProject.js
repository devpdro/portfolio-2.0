import React, { useState } from "react";
import Modal from "react-modal";

import styles from "../../styles/ViewMore.module.scss";

import { AiOutlineCloseCircle } from "react-icons/ai";

import Image from "../../assets/bookworm.png";

Modal.setAppElement("#root");

function Bookworm() {
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
              src={Image}
              alt="Imagem do Projeto de Livros"
            />
            <div className={styles.text_box}>
              <h1>
                <span>Bookwo</span>rm
              </h1>
              <p>
                O projeto consiste em um E-commerce de Livros, proporcionando
                aos usuários uma experiência amigável e intuitiva para navegar
                pela loja, cadastrar-se, adicionar itens ao carrinho e finalizar
                suas compras.
              </p>
              <p>Algumas features que valem destacar:</p>
              <ul className={styles.list_text}>
                <li>Sistema de cadastro usando o Firebase Authentication.</li>
                <li>
                  Carrinho de compras permitindo que os usuários adicionem
                  livros e acompanhem a quantidade e preço total dos itens
                  selecionados antes de finalizar a compra.
                </li>
                <li>
                  Barra de pesquisa, ao digitar nela os resultados são exibidos
                  em tempo real, sem a necessidade de recarregar a página.
                </li>
                <li>
                  Integração da API do PayPal no processo de finalização da
                  compra.
                </li>
              </ul>
              <div>
                <a
                  href="https://ecommerce-project-livid-chi.vercel.app/"
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
                  href="https://github.com/devpdro/ecommerce-project"
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

export default Bookworm;
