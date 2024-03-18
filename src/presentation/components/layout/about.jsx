import styles from "./about.module.scss";

function About() {
  return (
    <section id="about" className={styles.box}>
      <div className={styles.container}>
        <div className={styles.box_container}>
          <div className={styles.text_box}>
            <h1>
              <span>Sobre mim</span>
            </h1>
            <p>
              Meu nome é Victor Hugo Pedro, atualmente estou cursando Ciência da
              Computação, apaixonado por tecnologia, especialmente em
              desenvolvimento de software. Especializando na stack JavaScript e
              ReactJs para desenvolver aplicações altamente escaláveis e de alta
              demanda. Nos últimos anos, tenho mantido um registro de trabalho
              diário, dedicando-me não apenas a concluir tarefas, mas também a
              aprimorar minhas habilidades e expandir meu conhecimento. Tenho
              compromisso com o aprendizado contínuo e a colaboração com equipes
              para alcançar excelentes resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
