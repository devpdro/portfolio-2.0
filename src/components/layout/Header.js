import styles from "../../styles/layout/Header.module.scss";

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.box_container}>
        <div className={styles.text_box}>
          <h2>
            Seu próximo desenvolvedor <span>Front-End ;{")"}</span>
          </h2>
          <div>
            <input className={styles.cv} type="submit" value="Donwload CV" />
            <a
              href="https://api.whatsapp.com/send?phone=5519996776847"
              target="_blank"
              rel="noopener noreferrer"
            >
              <input
                className={styles.contact}
                type="submit"
                value="Entrar em contato"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
