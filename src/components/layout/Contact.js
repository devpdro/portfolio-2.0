import styles from "../../styles/layout/Contact.module.scss";

import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <footer className={styles.container}>
      <h1>Contatos</h1>
      <div className={styles.box_container_contact}>
        <div className={styles.box_container_icon}>
          <div className={styles.box_icon}>
            <HiOutlineMail className={styles.icon} />
          </div>
          <div className={styles.box_text}>
            <h5>Email</h5>
            <p>victorpedr879@gmail.com</p>
          </div>
        </div>
        <div className={styles.box_container_icon}>
          <div className={styles.box_icon}>
            <HiOutlineMail className={styles.icon} />
          </div>
          <div className={styles.box_text}>
            <h5>Email</h5>
            <p>victorpedr879@gmail.com</p>
          </div>
        </div>
        <div className={styles.box_container_icon}>
          <div className={styles.box_icon}>
            <HiOutlineMail className={styles.icon} />
          </div>
          <div className={styles.box_text}>
            <h5>Email</h5>
            <p>victorpedr879@gmail.com</p>
          </div>
        </div>
        <div className={styles.box_container_icon}>
          <div className={styles.box_icon}>
            <HiOutlineMail className={styles.icon} />
          </div>
          <div className={styles.box_text}>
            <h5>Email</h5>
            <p>victorpedr879@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
