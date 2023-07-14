import styles from "../../styles/layout/About.module.scss";

function About() {
  return (
    <section className={styles.box}>
      <div className={styles.container}>
        <div className={styles.box_container}>
          <div className={styles.text_box}>
            <h1>Sobre Mim</h1>
            <p>
              Meu nome é Victor Hugo Pedro, atualmente estou cursando Ciência da
              Computação, apaixonado por tecnologia, especialmente em
              desenvolvimento de software. Iniciando uma formação de
              Desenvolvimento Full Stack com especialização em Front-End.
              Atualmente estou focando nas tecnologias voltadas ao FrontEnd,
              fascinado pelo aprendizado e sempre em busca do próximo nível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
