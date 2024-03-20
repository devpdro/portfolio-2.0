import { IMAGES } from "../../assets/images/images";

import Curriculo from "../../../presentation/assets/pdf/Resume-Victor-Hugo-Pedro.pdf";
import styles from "./header.module.scss";

function Header() {
  return (
    <header id="header" className={styles.container}>
      <div className={styles.box_container}>
        <div className={styles.text_box}>
          <h2 className={styles.title}>
            Olá, eu sou o <br /><span>Victor Hugo ;{")"}</span>
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
        <div className={styles.img_box}>
          <img className={styles.img} src={IMAGES.myPicture} alt="Foto minha" />
        </div>
      </div>
    </header>
  );
}

export default Header;
