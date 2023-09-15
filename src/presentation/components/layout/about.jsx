import styles from "./about.module.scss";

import Image from "../../assets/img/me.png";

function About() {
  return (
    <section id="about" className={styles.box}>
      <div className={styles.container}>
        <div className={styles.box_container}>
          <div className={styles.text_box}>
            <h1>
              <span>Sobre mi</span>m
            </h1>
            <p>
              Meu nome é Victor Hugo Pedro, atualmente estou cursando Ciência da
              Computação, apaixonado por tecnologia, especialmente em
              desenvolvimento de software. Iniciando uma formação de
              Desenvolvimento Full Stack com especialização em Front-End.
              Atualmente estou focado nas tecnologias voltadas ao FrontEnd,
              fascinado pelo aprendizado e sempre em busca do próximo nível.
            </p>
          </div>
          <div className={styles.img_box}>
            <img className={styles.img} src={Image} alt="Foto minha" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
