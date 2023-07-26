import styles from "../../styles/layout/Contact.module.scss";

import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <h1>Contatos</h1>
      <div className={styles.box_container_contact}>
        <a
          href="https://api.whatsapp.com/send?phone=5519996776847"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.box_container_icon}>
            <div className={styles.box_icon}>
              <FaWhatsapp className={styles.icon} />
            </div>
            <div className={styles.box_text}>
              <h5>Whatsapp</h5>
              <p>(19) 99677-6847</p>
            </div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/victor-hugo-pedro-656a67228/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.box_container_icon}>
            <div className={styles.box_icon}>
              <SlSocialLinkedin className={styles.icon} />
            </div>
            <div className={styles.box_text}>
              <h5>Linkedin</h5>
              <p>@victorhugopedro</p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/devpdro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.box_container_icon}>
            <div className={styles.box_icon}>
              <FiGithub className={styles.icon} />
            </div>
            <div className={styles.box_text}>
              <h5>Github</h5>
              <p>@devpdro</p>
            </div>
          </div>
        </a>
        <a
          href="mailto:victorpedr879@gmail.com?subject=Sobre"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.box_container_icon}>
            <div className={styles.box_icon}>
              <HiOutlineMail className={styles.icon} />
            </div>
            <div className={styles.box_text}>
              <h5>E-mail</h5>
              <p>victorpedr879@gmail.com</p>
            </div>
          </div>
        </a>
      </div>
    </footer>
  );
}

export default Contact;
