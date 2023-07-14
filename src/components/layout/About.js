import styles from "../../styles/layout/About.module.scss";

import Image from "../../assets/post1.png";

function About() {
  return (
    <section className={styles.container}>
      <div className={styles.box_container}>
        <div className={styles.img_box}>
          <img className={styles.img} src={Image} alt="Foto minha" />
        </div>
        <div className={styles.text_box}>
          <h1>Sobre Mim</h1>
          <p>
            Meu nome é Victor Hugo Pedro, Atualmente estou cursando Ciência da
            Computação, apaixonado por tecnologia, especialmente em
            desenvolvimento de software. Iniciando uma formação de
            Desenvolvimento Full Stack com especialização em Front-End,
            atualmente estou focando nas tecnologias voltadas ao FrontEnd.
          </p>
          <p>Fascinado pelo aprendizado e sempre em busca do próximo nível.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
