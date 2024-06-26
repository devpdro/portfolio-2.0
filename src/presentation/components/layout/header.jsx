import styles from "./header.module.scss";

import Curriculo from "../../../presentation/assets/pdf/Resume-Victor-Hugo-Pedro.pdf";

function Header() {
  return (
    <header id="header" className={styles.container}>
      <div className={styles.box_container}>
        <div className={styles.text_box}>
          <h2>
            Seu próximo desenvolvedor de <span>Software;{")"}</span>
          </h2>
          <div>
            <a href={Curriculo} target="_blank" rel="noopener noreferrer">
              <input className={styles.cv} type="submit" value="Donwload CV" />
            </a>
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
