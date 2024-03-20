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
              Sou um Desenvolvedor de Software, atualmente cursando Ciência da
              Computação, apaixonado por tecnologia, especialmente em áreas como
              desenvolvimento de software. Tenho me especializado na stack
              JavaScript e ReactJs para criar aplicações altamente escaláveis e
              de alta demanda. Ao longo dos anos, tenho mantido um registro de
              trabalho diário, dedicando-me não apenas a concluir tarefas, mas
              também a aprimorar minhas habilidades e expandir meu conhecimento.
              Estou comprometido com o aprendizado contínuo e colaboro com
              equipes para alcançar excelentes resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
